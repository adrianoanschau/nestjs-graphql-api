import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { TaskStatus } from "../models/task-status.enum";
import { TaskChangeLogService } from "./task-change-log.service";

@Injectable()
export class TasksService {

  private include = { user: true };

  constructor(
    private prisma: PrismaService,
    private taskChangeLogService: TaskChangeLogService,
  ) {}

  all() {
    return this.prisma.task.findMany({
      include: this.include,
      orderBy: { createdAt: 'desc' },
    });
  }

  select(taskId: number) {
    return this.prisma.task.findOne({ where: { id: taskId } });
  }

  createTask(description: string, userId: number) {
    const user = {
      connect: { id: userId },
    };
    return this.prisma.task.create({
      include: this.include,
      data: {
        description,
        user,
      },
    });
  }

  async changeTaskStatus(taskId: number, userId: number) {
    const task = await this.select(taskId);
    const status = task.status === TaskStatus.COMPLETED ? TaskStatus.REOPENED : TaskStatus.COMPLETED;
    const updated = await this.prisma.task.update({
      where: { id: taskId },
      data: { status }
    });
    await this.taskChangeLogService.createChangeLog(taskId, userId, status);
    return updated;
  }
}
