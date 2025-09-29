import { config } from 'app/common/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize/dist/interfaces/sequelize-options.interface';

export const postgresConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  uri: config.postgres.url,
  synchronize: true,
  autoLoadModels: true,
  pool: {
    max: 5, // Maximum number of connection in the pool
    min: 1, // Minimum number of connection in the pool
    acquire: 30000, // Maximum time, in milliseconds, that a connection can be idle before being released
    idle: 10000, // Maximum time, in milliseconds, that a connection can be idle before being closed
  },
};
