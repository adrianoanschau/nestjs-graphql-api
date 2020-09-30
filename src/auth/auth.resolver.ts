import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthService } from "./services/auth.service";
import { CurrentUser } from "./helpers/current-user.decorator";
import { User } from "../users/models/user.model";
import { UsersService } from "../users/services/users.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Mutation()
  login(@Args('email') email: string) {
    return this.authService.login(email);
  }

  @Query(returns => User)
  @UseGuards(JwtAuthGuard)
  me(@CurrentUser() user: User) {
    return this.usersService.getById(user.id);
  }
}
