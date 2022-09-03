import { Test, TestingModule } from '@nestjs/testing';
import { Redisservice } from './redis.service';

describe('RedisService', () => {
  let service: Redisservice;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Redisservice],
    }).compile();

    service = module.get<Redisservice>(Redisservice);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
