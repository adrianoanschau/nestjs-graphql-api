import { UsersService } from "./services/users.service";
export declare class UsersResolver {
    private usersService;
    constructor(usersService: UsersService);
    users(): Promise<import(".prisma/client").User[]>;
    createUser(name: string, email: string): import(".prisma/client").Prisma__UserClient<import(".prisma/client").User>;
}
