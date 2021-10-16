import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getDefaults/:id')
  getHello(@Param('id') id: number): Promise<any> {
    return this.appService.getOneDefault({ id });
  }

  @Get('getDefaults')
  getHell1(): Promise<any> {
    return this.appService.getAllDefault();
  }

  @Get('createDefault')
  createDefault(@Query('name') name: string): Promise<any> {
    return this.appService.createDefault({ name });
  }
}
