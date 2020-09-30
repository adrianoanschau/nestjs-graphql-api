
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum TaskStatus {
    TODO = "TODO",
    COMPLETED = "COMPLETED",
    REOPENED = "REOPENED"
}

export class AccessToken {
    access_token: string;
}

export abstract class IQuery {
    abstract me(): User | Promise<User>;
    abstract messages(): Message[] | Promise<Message[]>;
    abstract tasks(): Task[] | Promise<Task[]>;
    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract login(email: string): AccessToken | Promise<AccessToken>;
    abstract createMessage(description: string): Message | Promise<Message>;
    abstract createTask(description: string): Task | Promise<Task>;
    abstract changeTaskStatus(taskId: number): Task | Promise<Task>;
    abstract createUser(name: string, email: string): User | Promise<User>;
}

export class Message {
    id: number;
    description: string;
}

export class Task {
    id: number;
    description: string;
    user: User;
    status: TaskStatus;
}

export class TaskChangeLog {
    id: number;
    user: User;
    task: Task;
    status: TaskStatus;
    updatedAt: Date;
}

export class User {
    id: number;
    name: string;
    email: string;
}
