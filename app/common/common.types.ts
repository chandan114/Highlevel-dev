import { KafkaWorkerEnum } from 'app/kafka/enums';
import { CronJobNameEnum } from './enums/cron.enum';

export type DynamicModuleOptionType =
  | { env: string; type?: 'server' }
  | { env: string; type?: 'worker'; name?: KafkaWorkerEnum }
  | { env: string; type?: 'consumer'; name?: KafkaWorkerEnum }
  | { env: string; type?: 'cron'; name?: CronJobNameEnum };
