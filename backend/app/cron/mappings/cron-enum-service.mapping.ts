import { Provider } from '@nestjs/common';
import { CronJobNameEnum } from 'app/common/enums/cron.enum';

export const CronEnumServiceMapping: { [key in CronJobNameEnum]: Provider[] } =
  {
    [CronJobNameEnum.TEST_SERVICE_CRON]: [],
  };
