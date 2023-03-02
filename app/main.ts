import {
  INestApplicationContext,
  NestApplicationOptions,
} from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { config } from './common/config';
import { winstonOptions } from './common/logger';
import { registerAppServer } from './common/register-server';
import * as Sentry from '@sentry/node';
import { DynamicModuleOptionType } from './common/common.types';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { CronEnumServiceMapping } from './cron/mappings/cron-enum-service.mapping';
import { KafkaWorkerEnumServiceMapping } from './kafka/mappings/kafka-consumer-worker-service.mapping';
import { HealthService } from './health/services/health.service';
import * as path from 'path';
import { FdkService } from './fdk/fdk.service';
import * as cookieParser from 'cookie-parser';

async function getAppContext(
  option: DynamicModuleOptionType,
  nestAppOptions,
): Promise<INestApplicationContext> {
  const app = await NestFactory.createApplicationContext(
    AppModule.register(option),
    nestAppOptions,
  );
  return await app.init();
}

process.on('exit', (code) => {
  console.info(`Exited with code: ${code}`);
});

async function bootstrap() {
  const { mode, env, cron_job, worker_type } = config;
  const logger = WinstonModule.createLogger(winstonOptions);
  const nestAppOptions: NestApplicationOptions = {
    logger: logger,
  };
  if (env === 'local') {
    await registerAppServer(nestAppOptions, logger);
  } else {
    try {
      if (config.sentry.enabled) {
        Sentry.init({
          dsn: config.sentry.dsn,
          environment: config.sentry.environment,
        });
      }
    } catch (e) {
      console.warn(`Unable to connect to sentry`);
    }
    let app;
    switch (mode) {
      case 'server':
        app = await NestFactory.create(
          AppModule.register({
            env,
            type: 'server',
          }),
          nestAppOptions,
        );
        const fdkService = app.get(FdkService);
        const fdkExtension = fdkService.fdkExtension;
        app.use(express.static(path.join(__dirname, './../../', 'dist')));
        app.use(cookieParser('ext.session'));
        app.use('/', fdkExtension.fdkHandler);
        await app.listen(config.port || 80);
        const healthService = app.get(HealthService);
        await healthService.startHealthCheckDaemon();
        break;
      case 'cron':
        app = await getAppContext(
          {
            env,
            type: mode,
            name: cron_job,
          },
          nestAppOptions,
        );
        const cronService = app.get(CronEnumServiceMapping[cron_job]);
        app.enableShutdownHooks();
        try {
          const healthService = app.get(HealthService);
          await healthService.startHealthCheckDaemon();
          // await cronService.run();
          // Example Run or Something Else We Should Add
          // Need to create a Comman Function Name that we want the CronService to Run
        } catch (err) {
          console.error(err);
        } finally {
          const healthService = app.get(HealthService);
          await healthService.stopHealthCheckDaemon();
          await app.close();
          process.exit(0);
        }
        break;
      case 'worker' || 'consumer':
        app = await getAppContext(
          {
            env,
            type: mode,
            name: worker_type,
          },
          nestAppOptions,
        );
        const kafkaWorkerService = app.get(
          KafkaWorkerEnumServiceMapping[worker_type],
        );
        // await kafkaWorkerService.onModuleInit();
        break;
      default:
        process.exit(1);
    }
  }
}
bootstrap();
