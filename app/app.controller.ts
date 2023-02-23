import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('/')
export class AppController {
  @Get(['/_livez', '/_healthz', '/_readyz'])
  checkHealth(@Res() response: Response): any {
    return response.status(HttpStatus.OK).json({ ok: 'ok' });
  }
}
