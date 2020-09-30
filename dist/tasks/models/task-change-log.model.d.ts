import { User } from "../../users/models/user.model";
import { TaskStatus } from "./task-status.enum";
import { Task } from "./task.model";
export declare class TaskChangeLog {
    id: number;
    task: Task;
    user: User;
    status: TaskStatus;
    updatedAt: Date;
}
