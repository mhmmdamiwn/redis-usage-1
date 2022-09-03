import { Controller, Get } from '@nestjs/common';
import { Redisservice } from './redis.service';

@Controller('redis')
export class RedisController {
    
    constructor(private readonly redisService:Redisservice){}
    
    @Get("sms")
    getAllSms(){
        
        return this.redisService.getAllSms();
    }
}

