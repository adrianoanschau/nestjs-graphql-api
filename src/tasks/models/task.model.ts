import { Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from "../../users/models/user.model";
import { TaskStatus } from "./task-status.enum";

@ObjectType()
export class Task {
  @Field(type => Int)
  id: number;

  @Field()
  description: string;

  @Field()
  user: User;

  @Field()
  status: TaskStatus;
}