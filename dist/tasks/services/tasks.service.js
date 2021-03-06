"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const task_status_enum_1 = require("../models/task-status.enum");
const task_change_log_service_1 = require("./task-change-log.service");
let TasksService = class TasksService {
    constructor(prisma, taskChangeLogService) {
        this.prisma = prisma;
        this.taskChangeLogService = taskChangeLogService;
        this.include = { user: true };
    }
    all() {
        return this.prisma.task.findMany({
            include: this.include,
            orderBy: { createdAt: 'desc' },
        });
    }
    select(taskId) {
        return this.prisma.task.findOne({ where: { id: taskId } });
    }
    createTask(description, userId) {
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
    async changeTaskStatus(taskId, userId) {
        const task = await this.select(taskId);
        const status = task.status === task_status_enum_1.TaskStatus.COMPLETED ? task_status_enum_1.TaskStatus.REOPENED : task_status_enum_1.TaskStatus.COMPLETED;
        const updated = await this.prisma.task.update({
            where: { id: taskId },
            data: { status }
        });
        await this.taskChangeLogService.createChangeLog(taskId, userId, status);
        return updated;
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        task_change_log_service_1.TaskChangeLogService])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map