import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { HealthModule } from './health.module';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HealthModule],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "OK"', async () => {
    const {details, error, info, status} = await controller.check();
    const expectedServerStatus = { info: 'Server is running', status: 'up' };

    expect(details.server).toEqual(expectedServerStatus);
    expect(error).toEqual({});
    expect(info.server).toEqual(expectedServerStatus);
    expect(status).toBe('ok');
  });
});
