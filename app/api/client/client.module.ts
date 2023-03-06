import { Module } from '@nestjs/common';
import { ClientController } from './controllers/client.controller';

// This module is only Created to service the Client Part of the Website as we have a condition that if none of our backend route's are matched then we will serve the client so make sure that this module is placed after all module's because its using '*' as their route
@Module({
  controllers: [ClientController],
})
export class ClientModule {}
