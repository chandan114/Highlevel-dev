import { Inject, Module } from '@nestjs/common';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import { mongooseConnectOptions } from 'app/database/mongo/mongo.config';
import { Connection } from 'mongoose';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: mongooseConnectOptions.uri,
      }),
    }),
  ],
})
export class MongoModule {
  constructor(
    @InjectConnection() private readonly mongoConnection: Connection,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    if (this.mongoConnection.readyState === 1) {
      this.logger.info(`MongoDb is Connected`);
    }
    this.mongoConnection.on('connected', () => {
      this.logger.info('mongodb connection time');
      this.logger.info(`MongoDB  connected`);
    });

    this.mongoConnection.on('disconnected', () => {
      this.logger.warn(`MongoDB disconnected`);
    });

    this.mongoConnection.on('reconnected', () => {
      this.logger.info(`MongoDB reconnected`);
    });

    this.mongoConnection.on('error', (err) => {
      this.logger.error(`Error connection MongoDB`);
      this.logger.error(err);
      // If first connect fails because mongod is down, try again later.
      // This is only needed for first connect, not for runtime reconnects.
      // See: https://github.com/Automattic/mongoose/issues/5169
      // Wait for a bit, then try to connect again

      // [PNC]: removed the if clause to retry on every connection error
      setTimeout(() => {
        this.logger.info(`Retrying first connect for MongoDB ...`);
        mongoConnection.openUri(mongooseConnectOptions.uri).catch(() => {
          this.logger.warn('Reconnecting Failed');
        });
        // Why the empty catch?
        // Well, errors thrown by db.open() will also be passed to .on('error'),
        // so we can handle them there, no need to log anything in the catch here.
        // But we still need this empty catch to avoid unhandled rejections.
      }, 5 * 1000);
    });

    this.mongoConnection.on('reconnectFailed', () => {
      this.logger.error(`MongoDB reconnectFailed`);
    });
  }
}
