import { PrismaService } from "../../prisma/prisma.service";
import { UserCreateInput } from "@prisma/client";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    all(): Promise<import(".prisma/client").User[]>;
    create(data: UserCreateInput): import(".prisma/client").Prisma__UserClient<import(".prisma/client").User>;
    getById(id: number): import(".prisma/client").Prisma__UserClient<import(".prisma/client").User>;
    getByEmail(email: string): import(".prisma/client").Prisma__UserClient<import(".prisma/client").User>;
}
