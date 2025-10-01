import { Controller, Get } from '@nestjs/common';

@Controller('api/proxy')
export class ApplicationTestController {
  @Get('/')
  async getApplicationRouterStatus() {
    return { success: true };
  }
}
