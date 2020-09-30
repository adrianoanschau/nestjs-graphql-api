import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Task } from "../../tasks/models/task.model";

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  tasks: Task[];
}