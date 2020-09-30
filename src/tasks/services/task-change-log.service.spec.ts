import { Test, TestingModule } from '@nestjs/testing';
import { TaskChangeLogService } from './task-change-log.service';

describe('TaskChangeLogService', () => {
  let service: TaskChangeLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskChangeLogService],
    }).compile();

    service = module.get<TaskChangeLogService>(TaskChangeLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
