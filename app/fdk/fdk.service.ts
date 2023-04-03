import { Injectable } from '@nestjs/common';
import { config } from 'app/common/config';
import { setupFdk } from 'fdk-extension-javascript/express';
import extensionHandler from '../common/fdk-handlers';
import { InjectRedis, Redis } from '@nestjs-modules/ioredis';
import { RedisStorage } from 'fdk-extension-javascript/express/storage';

@Injectable()
export class FdkService {
  fdkExtension;
  constructor(@InjectRedis() private readonly redis: Redis) {
    this.fdkExtension = setupFdk({
      api_key: config.PARTNERS_API_KEY,
      api_secret: config.PARTNERS_API_SECRET,
      cluster: config.CLUSTER_URL,
      base_url: config.BROWSER_CONFIG.HOST_MAIN_URL,
      scopes: ['company/saleschannel', 'company/application/settings'],
      callbacks: extensionHandler,
      storage: new RedisStorage(redis, 'jmd-backend'),
      access_mode: 'offline',
    });
  }
}
