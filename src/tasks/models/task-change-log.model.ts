import { Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from "../../users/models/user.model";
import { TaskStatus } from "./task-status.enum";
import { Task } from "./task.model";

@ObjectType()
export class TaskChangeLog {
  @Field(type => Int)
  id: number;

  @Field()
  task: Task;

  @Field()
  user: User;

  @Field()
  status: TaskStatus;

  @Field()
  updatedAt: Date;
}