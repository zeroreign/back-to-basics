import { Controller, Get} from '@nestjs/common';
import { HealthCheckService } from '@nestjs/terminus';
import { ServerHealthIndicator } from './serverHealthIndicator';
@Controller('health')
export class HealthController {
  constructor(private health: HealthCheckService, private serverHealthInidcator: ServerHealthIndicator){}
  
  @Get()
  check(){
    return this.health.check([
      () => this.serverHealthInidcator.isHealthy()
    ]);
  }
}
