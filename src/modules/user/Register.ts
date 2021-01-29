import { User } from "../../entity/User";
import * as bcrypt from "bcryptjs";
import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";

@Resolver(User)
export class RegisterResolver {

  @Query(() => String)
  async hello() {
    return "Hello !";
  }

  @FieldResolver()
  async name(@Root() parent: User) {
    return `${parent.firstName} ${parent.lastName}`
  }

  @Mutation(() => User)
  async register(
    @Arg("fristName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User> {
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