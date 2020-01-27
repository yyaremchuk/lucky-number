import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DrawController } from './controllers/draw.controller';
import { DrawService } from './services/draw.service';
import { DrawSchema } from './schemas/draw.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Draw', schema: DrawSchema }])],
  controllers: [DrawController],
  providers: [DrawService]
})
export class DrawModule {}
