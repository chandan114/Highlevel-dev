import { Provider } from '@nestjs/common';
import { CronJobNameEnum } from 'app/common/enums/cron.enum';
import { FdkService } from 'app/fdk/fdk.service';

export const CronEnumServiceMapping: { [key in CronJobNameEnum]: Provider[] } =
  {
    [CronJobNameEnum.TEST_SERVICE_CRON]: [FdkService],
  };
