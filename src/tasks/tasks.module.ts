import { Module } from "@nestjs/common";
import { TasksResolver } from "./tasks.resolver";
import { TasksService } from "./services/tasks.service";
import { PrismaModule } from "../prisma/prisma.module";
import { TaskChangeLogService } from "./services/task-change-log.service";

@Module({
  providers: [TasksResolver, TasksService, TaskChangeLogService],
  imports: [PrismaModule],
})
export class TasksModule {}
