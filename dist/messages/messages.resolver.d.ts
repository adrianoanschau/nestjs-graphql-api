import { PrismaService } from "../prisma/prisma.service";
export declare class MessagesResolver {
    private prisma;
    constructor(prisma: PrismaService);
    messages(): Promise<import(".prisma/client").Message[]>;
    createMessage(description: string): import(".prisma/client").Prisma__MessageClient<import(".prisma/client").Message>;
}
