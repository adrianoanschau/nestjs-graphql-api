import { AuthService } from "./services/auth.service";
import { User } from "../users/models/user.model";
import { UsersService } from "../users/services/users.service";
export declare class AuthResolver {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(email: string): Promise<any>;
    me(user: User): import(".prisma/client").Prisma__UserClient<import(".prisma/client").User>;
}
