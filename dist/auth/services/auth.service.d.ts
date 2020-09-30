import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../../users/services/users.service";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(email: string): Promise<any>;
}
