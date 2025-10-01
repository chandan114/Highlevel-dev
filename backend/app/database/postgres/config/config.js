/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node/register');
const { config } = require('../../../common/config');

module.exports = {
  development: {
    url: config.postgres.url,
    dialect: 'postgres',
    synchronize: false,
    autoLoadModels: true,
    logging: false,
    prepared_statements: true,
  },
  production: {
    // write: {
    url: config.postgres.url,
    dialect: 'postgres',
    synchronize: false,
    autoLoadModels: true,
    logging: false,
    prepared_statements: true,
  },
};
