import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { config } from './common/config';
import { mongooseConnectOptions } from './database/mongo.config';
import { RedisCacheModule } from './redis/redis.module';

@Module({
  imports: [
    RedisCacheModule,
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: mongooseConnectOptions.uri,
      }),
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
