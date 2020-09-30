import { PrismaService } from "../../prisma/prisma.service";
import { TaskChangeLogService } from "./task-change-log.service";
export declare class TasksService {
    private prisma;
    private taskChangeLogService;
    private include;
    constructor(prisma: PrismaService, taskChangeLogService: TaskChangeLogService);
    all(): Promise<(import(".prisma/client").Task & {
        user: import(".prisma/client").User;
    })[]>;
    select(taskId: number): import(".prisma/client").Prisma__TaskClient<import(".prisma/client").Task>;
    createTask(description: string, userId: number): import(".prisma/client").Prisma__TaskClient<import(".prisma/client").Task & {
        user: import(".prisma/client").User;
    }>;
    changeTaskStatus(taskId: number, userId: number): Promise<import(".prisma/client").Task>;
}
