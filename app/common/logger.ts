import { WinstonModuleOptions } from 'nest-winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import { join } from 'path';
import * as winston from 'winston';

function getPath(path: string): string {
  return join(process.cwd(), path);
}

const log_path = getPath('/logs');

export const winstonOptions: WinstonModuleOptions = {
  transports: [
    //new Sentry(sentryOptions),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.prettyPrint(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.prettyPrint(),
        nestWinstonModuleUtilities.format.nestLike(),
        winston.format.colorize(),
      ),
      filename: log_path + '/combined.log',
    }),
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.prettyPrint(),
        nestWinstonModuleUtilities.format.nestLike(),
        winston.format.uncolorize(),
      ),
      filename: log_path + '/error.log',
      level: 'error',
    }),
  ],
};
