import { Controller, Get } from '@nestjs/common';

@Controller('api') // Basispfad für alle Routen in diesem Controller
export class AppController {

  @Get('info') // GET /api/info
  getInfo() {
    return 'Info route reached';
  }

  @Get('debug') // GET /api/debug
  getDebug() {
    return 'Debug route reached';
  }

  @Get('error') // GET /api/error
  getError() {
    return 'Error route reached';
  }

  @Get('fatal') // GET /api/fatal
  getFatal() {
    return 'Fatal route reached';
  }
}
