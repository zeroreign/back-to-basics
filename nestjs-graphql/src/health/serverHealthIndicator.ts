import { Injectable } from '@nestjs/common';
import { HealthIndicator } from '@nestjs/terminus';

@Injectable()
export class ServerHealthIndicator extends HealthIndicator{
  async isHealthy(){
    const isHealthy = true;
    return this.getStatus('server', isHealthy, {info: 'Server is running'});
  }
}
