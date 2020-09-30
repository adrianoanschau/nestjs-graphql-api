import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { TaskStatus } from "../models/task-status.enum";

@Injectable()
export class TaskChangeLogService {

  constructor(private prisma: PrismaService) {}

  all() {
    return this.prisma.taskChangeLog.findMany();
  }

  createChangeLog(taskId: number, userId: number, status: TaskStatus) {
    const taskConnect = { connect: { id: taskId } };
    const userConnect = { connect: { id: userId } };
    return this.prisma.taskChangeLog.create({
      include: { task: true, user: true },
      data: {
        task: taskConnect,
        user: userConnect,
        status,
      }
    });
  }

}
