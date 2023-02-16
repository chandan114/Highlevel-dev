import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './common/config';
async function bootstrap() {
  const { mode } = config;
  let app;
  switch (mode) {
    case 'server':
      const app = await NestFactory.create(AppModule);
      await app.listen(3000);
      break;
    case 'cron':
      console.log('Cron is Running');
      break;
    case 'consumer':
      console.log('Consumer is Running');
    default:
      process.exit(1);
  }
}
bootstrap();
