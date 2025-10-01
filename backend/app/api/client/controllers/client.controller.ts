import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

@Controller('/')
export class ClientController {
  @Get('*')
  async(@Res() res: Response) {
    res.contentType('text/html');
    return res.sendFile(
      path.join(__dirname, '../../../../../', 'dist/index.html'),
    );
  }
}
