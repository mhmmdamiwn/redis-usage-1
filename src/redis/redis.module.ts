import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisController } from './redis.controller';
import { Redisservice } from './redis.service';
import entities from './typrorm';
import { Sms } from './typrorm/typeorm';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[ ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
  }),
  RedisModule.forRoot({
    config: {
      host: 'localhost',
      port: 6379,
    }
  }),
    TypeOrmModule.forRoot({
      type:"mysql",
      host:"localhost",
      port:3306,
      username:"root",
      password:"Meshd@24468",
      database:"sms1",
      synchronize:true,
      entities:entities,
    }),TypeOrmModule.forFeature([Sms]),
  ],
  controllers: [RedisController],
  providers: [Redisservice]
})
export class Redismodule {}
