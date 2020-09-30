import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { Task } from "./models/task.model";
import { TasksService } from "./services/tasks.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { User } from "../users/models/user.model";
import { CurrentUser } from "../auth/helpers/current-user.decorator";

@Resolver(of => Task)
@UseGuards(JwtAuthGuard)
export class TasksResolver {

  constructor(private tasksService: TasksService) {}

  @Query(returns => [Task])
  tasks() {
    return this.tasksService.all();
  }

  @Mutation(returns => Task)
  createTask(
    @CurrentUser() user: User,
    @Args('description') description: string
  ) {
    return this.tasksService.createTask(description, user.id);
  }

  @Mutation(returns => Task)
  changeTaskStatus(
    @CurrentUser() user: User,
    @Args('taskId') taskId: number
  ) {
    return this.tasksService.changeTaskStatus(taskId, user.id);
  }
}
