import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';

import { Draw } from '@lucky-number/models';
import { DrawService } from '../services/draw.service';

@Controller('draws')
export class DrawController {
  constructor(private readonly drawService: DrawService) {}

  @Get()
  public findAll(): Promise<Array<Draw>> {
    return this.drawService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<Draw> {
    return this.drawService.findOne(id);
  }

  @Post()
  public create(@Body() draw: Draw): Promise<Draw> {
    return this.drawService.create(draw);
  }

  @Put(':id')
  public update(@Body() draw: Draw, @Param('id') id: string): Promise<Draw> {
    return this.drawService.update(id, draw);
  }
}
