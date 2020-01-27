import { Test, TestingModule } from '@nestjs/testing';

import { DrawService } from '../services/draw.service';
import { DrawController } from './draw.controller';

describe('DrawController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [DrawController],
      providers: [DrawService]
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<DrawController>(DrawController);
      expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
