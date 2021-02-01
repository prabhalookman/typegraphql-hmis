import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from 'type-graphql'; //, ID
import { User } from "../../../entity/User";
//import { ObjectId } from "mongodb";

@InputType()
export class RegisterInput implements Partial<User>{
    @Field()
    @Length(1,255)
    firstName: string;

    @Field()
    @Length(1,255)
    lastName: string;

    @Field()
    @IsEmail()
    email:string;

    @Field()
    password: string;
    
}