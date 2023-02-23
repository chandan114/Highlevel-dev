import { config } from 'app/common/config';
import { MongooseModuleOptions } from '@nestjs/mongoose/dist/interfaces/mongoose-options.interface';

export const mongooseConnectOptions: {
  uri: string;
  options: MongooseModuleOptions;
} = {
  uri: config.mongo.extension.uri,
  options: {},
};
