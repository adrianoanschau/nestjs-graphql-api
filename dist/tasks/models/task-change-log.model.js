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
exports.TaskChangeLog = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("../../users/models/user.model");
const task_status_enum_1 = require("./task-status.enum");
const task_model_1 = require("./task.model");
let TaskChangeLog = class TaskChangeLog {
};
__decorate([
    graphql_1.Field(type => graphql_1.Int),
    __metadata("design:type", Number)
], TaskChangeLog.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", task_model_1.Task)
], TaskChangeLog.prototype, "task", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", user_model_1.User)
], TaskChangeLog.prototype, "user", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], TaskChangeLog.prototype, "status", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], TaskChangeLog.prototype, "updatedAt", void 0);
TaskChangeLog = __decorate([
    graphql_1.ObjectType()
], TaskChangeLog);
exports.TaskChangeLog = TaskChangeLog;
//# sourceMappingURL=task-change-log.model.js.map