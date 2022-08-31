import { Field, ObjectType, ID } from "type-graphql"
import { IsEmail, Length } from "class-validator"

@ObjectType({ description: "User Schema"})
export default class User {
    @Field(() => ID)
    id: string;

    @Field()
    @Length(1, 30)
    name: string;

    @Field()
    @IsEmail()
    email: String;

    password: String;
}