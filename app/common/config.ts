import * as _ from 'lodash';
import * as convict from 'convict';
import * as mongodbUri from 'mongodb-uri';

convict.addFormat({
  name: 'mongo-uri',
  validate: function (val) {
    const parsed = mongodbUri.parse(val);
    mongodbUri.format(parsed);
  },
  coerce: function (url) {
    if (url) {
      const parsed = mongodbUri.parse(url);
      url = mongodbUri.format(parsed);
    }
    return url;
  },
});

const conf = convict({
  env: {
    doc: 'node env',
    format: String,
    default: 'development',
    env: 'NODE_ENV',
    arg: 'node_env',
  },
  server_type: {
    doc: 'server type',
    format: String,
    default: 'platform',
    env: 'SERVER_TYPE',
    arg: 'server_type',
  },
  mode: {
    doc: 'app mode',
    format: String,
    default: 'server',
    env: 'MODE',
    arg: 'mode',
  },
  consumer_type: {
    doc: 'consumer type',
    format: String,
    default: 'default',
    env: 'CONSUMER_TYPE',
    arg: 'consumer_type',
  },
  cron_job_name: {
    doc: 'cron job name',
    format: String,
    default: '',
    env: 'CRON_JOB',
    arg: 'cron_job',
  },
  cluster: {
    doc: 'cluster',
    format: String,
    default: 'jiox0',
    env: 'ENV',
    arg: 'env',
  },
  mongo: {
    extension: {
      uri: {
        doc: 'host mongo',
        format: 'mongo-uri',
        default: 'mongodb://localhost:27017/extensions',
        env: 'MONGO_EXTENSIONS_READ_WRITE',
        arg: 'mongo_extensions_read_write',
      },
    },
  },
  redis: {
    host: {
      doc: 'Redis URL of host.',
      format: String,
      default: 'redis://127.0.0.1:6379/0',
      env: 'REDIS_EXTENSIONS_READ_WRITE',
      arg: 'redis_extensions_read_write',
    },
  },
  kafka: {
    consumerGroupName: {
      doc: 'Kafka consumer group name',
      format: String,
      default: 'cart-order-proxy',
      env: 'KAFKA_CONSUMER_GROUP_NAME',
      args: 'kafka_consumer_group_name',
    },
    brokers: {
      doc: 'Kafka Brokers List',
      format: String,
      default: '127.0.0.1:9092',
      env: 'KAFKA_BROKER_LIST',
      arg: 'kafka_broker_list',
    },
  },
  sentry: {
    dsn: {
      doc: 'sentry url',
      format: String,
      default: '',
      env: 'SENTRY_DSN',
      arg: 'sentry_dsn',
    },
    environment: {
      doc: 'sentry environment',
      format: String,
      default: 'development',
      env: 'SENTRY_ENVIRONMENT',
      arg: 'sentry_environment',
    },
  },
  newrelic_app: {
    doc: 'new relic app name',
    format: String,
    default: 'cart-order-proxy-development',
    env: 'NEW_RELIC_APP_NAME',
    arg: 'new_relic_app_name',
  },
  new_relic_license_key: {
    doc: 'new relic license key',
    format: String,
    require: false,
    env: 'NEW_RELIC_LICENSE_KEY',
    args: 'new_relic_license_key',
    default: 'abcd',
  },
  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 5070,
    env: 'PORT',
    arg: 'port',
  },
  log_level: {
    doc: 'log level for logger',
    format: String,
    default: 'info',
    env: 'LOG_LEVEL',
    arg: 'log_level',
  },
  BROWSER_CONFIG: {
    HOST_MAIN_URL: {
      doc: 'Cart Main URL',
      format: String,
      default: '',
      env: 'CARTORDERPROXY_MAIN_DOMAIN',
      arg: 'cartorderproxy_main_domain',
    },
  },
  PARTNERS_API_KEY: {
    doc: 'Partners API Key',
    format: String,
    default: '642a86249ea058dd46382197',
    env: 'PARTNERS_API_KEY',
    arg: 'partners_api_key',
  },
  PARTNERS_API_SECRET: {
    doc: 'Partners API Secret',
    format: String,
    default: '_n81TcnzsoqAgKn',
    env: 'PARTNERS_API_SECRET',
    arg: 'partners_api_secret',
  },
  grindor: {
    main_url: {
      doc: 'Grindor base URL',
      format: String,
      default: '',
      env: 'GRINDOR_MAIN_URL',
      arg: 'grindor_main_url',
    },
  },
  POINTBLANK: {
    doc: 'Pointblank URL',
    format: String,
    default: '',
    env: 'POINTBLANK_INTERNL_SVC',
    arg: 'pointblank_internl_svc',
  },
  CLUSTER_URL: {
    doc: 'Cluster URL',
    format: String,
    default: 'https://api.jiox0.de',
    env: 'CLUSTER_URL',
    arg: 'cluster_url',
  }
});

conf.validate({
  allowed: 'strict',
});

export const config = _.cloneDeep(conf.get());
