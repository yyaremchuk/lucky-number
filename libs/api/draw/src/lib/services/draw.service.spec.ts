import { Test } from '@nestjs/testing';

import { DrawService } from './draw.service';

describe('DrawService', () => {
  let service: DrawService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [DrawService]
    }).compile();

    service = app.get<DrawService>(DrawService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
