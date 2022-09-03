import { RedisService } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sms } from './typrorm/typeorm';
import Redis from 'ioredis';

@Injectable()
export class Redisservice {
    private readonly redis: Redis;
    constructor(@InjectRepository(Sms)  private smsRepo:Repository<Sms> ,
    private readonly redisService: RedisService ){
        this.redis = this.redisService.getClient();
    }// or // @InjectRedis(DEFAULT_REDIS_NAMESPACE) private readonly redis: Redis,){}
    getAllSms(){
        const sms=this.getOrSetCache("sms",async ()=>{
           const data=await this.smsRepo.find()
           return data;
        });
        return sms;
    }
     getOrSetCache(key,cb){
        return new Promise((resolve,reject)=>{
            this.redis.get(key,async (error,data)=>{
                if(error)return reject(error)
                if(data !=null){ console.log("cach hit");return resolve(JSON.parse(data))}
                console.log("cache miss");
                const freshData=await cb();
                this.redis.setex(key,3600,JSON.stringify(freshData));
                resolve(freshData);
            })
            })
        }
    
    
}
