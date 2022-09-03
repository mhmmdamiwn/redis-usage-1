import { Module } from '@nestjs/common';
import { Redismodule } from './redis/redis.module';

@Module({
  imports: [Redismodule],
  controllers: [],
  providers: [],
})
export class AppModule {}
