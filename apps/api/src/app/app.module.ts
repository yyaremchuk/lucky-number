import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DrawModule } from '@lucky-number/api/draw';
import { AppController } from './app.controller';

import config from './config/config';

@Module({
  imports: [
    DrawModule,
    MongooseModule.forRoot(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
