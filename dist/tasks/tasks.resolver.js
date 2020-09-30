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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const task_model_1 = require("./models/task.model");
const tasks_service_1 = require("./services/tasks.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const user_model_1 = require("../users/models/user.model");
const current_user_decorator_1 = require("../auth/helpers/current-user.decorator");
let TasksResolver = class TasksResolver {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    tasks() {
        return this.tasksService.all();
    }
    createTask(user, description) {
        return this.tasksService.createTask(description, user.id);
    }
    changeTaskStatus(user, taskId) {
        return this.tasksService.changeTaskStatus(taskId, user.id);
    }
};
__decorate([
    graphql_1.Query(returns => [task_model_1.Task]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "tasks", null);
__decorate([
    graphql_1.Mutation(returns => task_model_1.Task),
    __param(0, current_user_decorator_1.CurrentUser()),
    __param(1, graphql_1.Args('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User, String]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "createTask", null);
__decorate([
    graphql_1.Mutation(returns => task_model_1.Task),
    __param(0, current_user_decorator_1.CurrentUser()),
    __param(1, graphql_1.Args('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User, Number]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "changeTaskStatus", null);
TasksResolver = __decorate([
    graphql_1.Resolver(of => task_model_1.Task),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksResolver);
exports.TasksResolver = TasksResolver;
//# sourceMappingURL=tasks.resolver.js.map