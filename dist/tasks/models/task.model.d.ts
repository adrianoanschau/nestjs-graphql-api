import { User } from "../../users/models/user.model";
import { TaskStatus } from "./task-status.enum";
export declare class Task {
    id: number;
    description: string;
    user: User;
    status: TaskStatus;
}
