import { Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { applicationRequestInterface } from '../interfaces/register-proxy-application-request.interface';
import { ApplicationService } from '../services/application.service';

@Controller('/proxy')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}
  @Get('/')
  async getApplicationRouterStatus() {
    return { success: true };
  }

  @Post('/register-proxy/:application_id')
  async registerApplication(
    @Param('application_id') application_id: string,
    @Req() request: applicationRequestInterface,
  ) {
    return this.applicationService.registerProxyApplication(
      request,
      application_id,
    );
  }

  @Delete('/register-proxy/:application_id')
  async deleteApplication(
    @Param('application_id') application_id: string,
    @Req() request: applicationRequestInterface,
  ) {
    return this.applicationService.deleteProxyApplication(
      request,
      application_id,
    );
  }

  @Get('/applications')
  async applicationList(@Req() request: applicationRequestInterface) {
    return this.applicationService.getProxyApplicationList(request);
  }

  @Get('/test-api')
  async xyz() {
    return 'hello';
  }
}
