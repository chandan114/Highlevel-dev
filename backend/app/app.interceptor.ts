import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Observable, tap } from 'rxjs';
import * as express from 'express';
import { Logger } from 'winston';

@Injectable()
export class AppInterceptor implements NestInterceptor {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    const req: express.Request = context.switchToHttp().getRequest();
    const { method, url, body, query, params } = req;
    /* Do not log req and res for health routes in terminal */
    const toIgnore = {
      '/_livez': true,
      '/_healthz': true,
      '/_readyz': true,
    };

    if (!toIgnore[url.trim()]) {
      this.logger.info(
        `Request - ${method}: ${url}`,
        JSON.stringify({ body, query, params }),
      );
    }

    return next.handle().pipe(
      tap({
        error: (exception) => {
          try {
            const errorResponse = {
              statusCode: exception.response.statusCode,
              message: exception.response.message,
              error: exception.response.error,
            };
            this.logger.error(
              `Response - ${method}: ${url} - ${JSON.stringify(errorResponse)}`,
            );
          } catch (e) {}
        },
        complete: () => {
          const res: express.Response = context.switchToHttp().getResponse();
          const { statusCode, statusMessage } = res;
          const responseData = {
            statusCode: statusCode,
            statusMessage: statusMessage,
          };
          if (!toIgnore[url.trim()]) {
            this.logger.info(
              `Response - ${method}: ${url} - ${JSON.stringify(responseData)}`,
            );
          }
        },
      }),
    );
  }
}
