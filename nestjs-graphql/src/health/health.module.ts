import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { ServerHealthIndicator } from './serverHealthIndicator';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [ServerHealthIndicator],
})
export class HealthModule {}
