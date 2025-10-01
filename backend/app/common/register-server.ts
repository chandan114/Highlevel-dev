import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app/app.module';
import helmet from 'helmet';
import * as compression from 'compression';
import * as express from 'express';
import { config } from './config';
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


  app.enableVersioning({ type: VersioningType.URI });

  app.use(helmet());

  // Enable CORS for React development server
  app.enableCors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
  });

  app.use(compression());

  app.enableShutdownHooks();

  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  app.enableShutdownHooks();

  await app.listen(port || 80, () => {
    logger.warn(`Server is Listening on Port ${port}`);
  });

  return app;
};
