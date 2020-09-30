import { PrismaService } from "../../prisma/prisma.service";
import { TaskStatus } from "../models/task-status.enum";
export declare class TaskChangeLogService {
    private prisma;
    constructor(prisma: PrismaService);
    all(): Promise<import(".prisma/client").TaskChangeLog[]>;
    createChangeLog(taskId: number, userId: number, status: TaskStatus): import(".prisma/client").Prisma__TaskChangeLogClient<import(".prisma/client").TaskChangeLog & {
        user: import(".prisma/client").User;
        task: import(".prisma/client").Task;
    }>;
}
