import { InjectRedis } from '@nestjs-modules/ioredis';
import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import * as fs from 'fs';
import * as mongoose from 'mongoose';
import Redis from 'ioredis';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import * as path from 'path';
import { Logger } from 'winston';

@Injectable()
export class HealthService {
  private file_healthz_path;
  private timer;
  constructor(
    @InjectRedis() private readonly redisConnection: Redis,
    @InjectConnection() private readonly mongoConnection: mongoose.Connection,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    this.file_healthz_path = path.resolve('/tmp/_healthz');
  }

  async changeHealthFile() {
    if ((await this.checkHealth()).ok)
      fs.closeSync(fs.openSync(this.file_healthz_path, 'w'));
  }

  async startHealthCheckDaemon() {
    await this.changeHealthFile();
    this.timer = setInterval(async () => {
      await this.changeHealthFile();
    }, 30 * 1000);
  }

  stopHealthCheckDaemon() {
    this.timer && clearInterval(this.timer);
  }

  async checkHealth() {
    try {
      if (!this.checkMongoConnection(this.mongoConnection)) {
        throw new Error(`Mongo is not Connected`);
      }
      await this.checkRedisConnection(this.redisConnection).catch(() => {
        throw new Error(`Redis is not Connected`);
      });
      return { ok: true };
    } catch (err) {
      return { ok: false, message: err.message };
    }
  }

  checkMongoConnection(connection: mongoose.Connection) {
    if (!connection) {
      return true;
    }
    const dbStatus = connection.readyState;
    if (dbStatus !== mongoose.STATES.connected) {
      return false;
    }
    return true;
  }

  checkRedisConnection(connection: Redis) {
    return new Promise<void>((resolve, reject) => {
      connection.ping((err, result) => {
        if (result !== 'PONG' || err) {
          reject();
        }
        resolve();
      });
    });
  }
}
