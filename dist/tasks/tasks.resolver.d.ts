import { TasksService } from "./services/tasks.service";
import { User } from "../users/models/user.model";
export declare class TasksResolver {
    private tasksService;
    constructor(tasksService: TasksService);
    tasks(): Promise<(import(".prisma/client").Task & {
        user: import(".prisma/client").User;
    })[]>;
    createTask(user: User, description: string): import(".prisma/client").Prisma__TaskClient<import(".prisma/client").Task & {
        user: import(".prisma/client").User;
    }>;
    changeTaskStatus(user: User, taskId: number): Promise<import(".prisma/client").Task>;
}
