import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import { join } from 'path';

@Controller()
export class AppController {
  @Get(['/_livez', '/_healthz', '/_readyz'])
  checkHealth(@Res() response: Response): any {
    return response.status(HttpStatus.OK).json({ ok: 'ok' });
  }

  @Get('*')
  getHtml(@Res() response): Promise<any> {
    console.log(join(__dirname, './../', 'dist'));
    return response.sendFile(path.join(__dirname, './../', 'dist/index.html'));
  }
}
