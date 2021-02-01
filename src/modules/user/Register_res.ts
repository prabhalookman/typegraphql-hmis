import { User } from "../../entity/User";
import * as bcrypt from "bcryptjs";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { RegisterInput } from "./registerInputTypes/RegisterInput";

@Resolver()
export class RegisterResolver {

  @Query(() => String)
  async hello() {
    return "Hello !";
  }

  //Moved to User ObjectType 
  // @FieldResolver()
  // async name(@Root() parent: User) {
  //   return `${parent.firstName} ${parent.lastName}`
  // }

  @Mutation(() => User)
  async register(
    @Arg("data"){ email, firstName, lastName, password }:RegisterInput ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    }).save();

    return user    
  }
} // Class End