import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, ObjectType, ID, Root } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
    
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column("text", {unique:true})
    email: string;

    // @Field()
    // name: string //Schema fields

    @Field()
    name(@Root() parent: User): String{
        return `${parent.firstName} ${parent.lastName}`
    }

    @Column()
    password: string //Db Column
}