import { InjectRedis } from '@nestjs-modules/ioredis';
import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import * as fs from 'fs';
import { Sequelize } from 'sequelize-typescript';
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
    @InjectConnection() private readonly sequelizeConnection: Sequelize,
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
      if (!await this.checkPostgresConnection(this.sequelizeConnection)) {
        throw new Error(`PostgreSQL is not Connected`);
      }
      await this.checkRedisConnection(this.redisConnection).catch(() => {
        throw new Error(`Redis is not Connected`);
      });
      return { ok: true };
    } catch (err) {
      return { ok: false, message: err.message };
    }
  }

  async checkPostgresConnection(connection: Sequelize) {
    try {
      if (!connection) {
        return false;
      }
      await connection.authenticate();
      return true;
    } catch (error) {
      return false;
    }
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
