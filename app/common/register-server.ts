import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app/app.module';
import helmet from 'helmet';
import * as compression from 'compression';
import * as express from 'express';
import { config } from './config';
import { FdkService } from 'app/fdk/fdk.service';
import path from 'path';

export const registerAppServer = async (nestAppOptions, logger) => {
  logger.warn(`Server initializing`);
  const { env, port } = config;
  const app = await NestFactory.create(
    AppModule.register({
      env,
      type: env === 'local' ? null : 'server',
    }),
    nestAppOptions,
  );

  app.useGlobalPipes(
    new ValidationPipe({
      validatorPackage: require('@nestjs/class-validator'),
      whitelist: true,
      transform: true,
      forbidUnknownValues: true,
    }),
  );

  app.use(express.static(path.join(__dirname, '../../dist')));

  const fdkService = app.get(FdkService);
  const fdkExtension = fdkService.fdkExtension;

  app.enableVersioning({ type: VersioningType.URI });

  app.use(helmet());

  app.use(compression());

  app.enableShutdownHooks();

  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  app.enableShutdownHooks();

  app.use('/', fdkExtension.fdkHandler);

  await app.listen(port || 80, () => {
    logger.warn(`Server is Listening on Port ${port}`);
  });

  return app;
};
