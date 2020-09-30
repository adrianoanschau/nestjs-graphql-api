import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { User } from "./models/user.model";
import { UsersService } from "./services/users.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Resolver(of => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(returns => [User])
  @UseGuards(JwtAuthGuard)
  users() {
    return this.usersService.all();
  }

  @Mutation(returns => User)
  createUser(
    @Args('name') name: string,
    @Args('email') email: string
  ) {
    return this.usersService.create({
      name, email
    });
  }
}
