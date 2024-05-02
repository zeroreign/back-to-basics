import { Test, TestingModule } from '@nestjs/testing';
import { Health } from './serverHealthIndicator';

describe('Health', () => {
  let provider: Health;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Health],
    }).compile();

    provider = module.get<Health>(Health);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
