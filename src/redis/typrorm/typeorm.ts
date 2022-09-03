import { Injectable } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Injectable()
@Entity()
export class Sms{
    @PrimaryGeneratedColumn({
        name:"sms_id",
        type:"bigint"
    })
    sms_id:number;

    @Column({
        type:'varchar',
        name:"phonenumber",
        nullable:false,
        default:""
    })
    phonenumber:string;

    @Column({
        type:"datetime",
        name:"sms_date"
    })
    date:Date;

    @Column({
        type:"varchar",
        name:"sms_text",
        default:""
    })
    sms_text:string;

    @Column({
        name:"sms_state",
        type:"boolean",
        default:true
    })
    sms_state:boolean;
    @Column({
        type:"varchar",
        name:"sms_title",
        default:""
    })
    sms_title:string;
}