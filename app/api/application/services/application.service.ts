import { Injectable } from '@nestjs/common';
import { config } from 'app/common/config';
import { applicationRequestInterface } from '../interfaces/register-proxy-application-request.interface';

@Injectable()
export class ApplicationService {
  async registerProxyApplication(
    request: applicationRequestInterface,
    application_id: string,
  ) {
    const { platformClient, fdkSession } = request;
    return await platformClient
      .application(application_id)
      .partner.removeProxyPath({
        extensionId: fdkSession.extension_id,
        attachedPath: config.APP_IDENTIFIER,
      });
  }

  async deleteProxyApplication(
    request: applicationRequestInterface,
    application_id: string,
  ) {
    const { platformClient, fdkSession } = request;

    return await platformClient
      .application(application_id)
      .partner.removeProxyPath({
        extensionId: fdkSession.extension_id,
        attachedPath: config.APP_IDENTIFIER,
      });
  }

  async getProxyApplicationList(request: applicationRequestInterface) {
    const { platformClient } = request;
    return await platformClient.configuration.getApplications({
      pageSize: 1000,
      q: JSON.stringify({ is_active: true }),
    });
  }
}
