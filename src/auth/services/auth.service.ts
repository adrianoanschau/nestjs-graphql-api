import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../../users/services/users.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string) {
    try {
      const user = await this.usersService.getByEmail(email);
      if (!user) {
        throw new NotFoundException("email not found");
      }
      const access_token = this.jwtService.sign({ id: user.id, email });
      return { access_token };
    } catch (error) {
      return error;
    }
  }
}
