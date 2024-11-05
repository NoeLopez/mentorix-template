import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get port(): number {
    return Number(this.configService.get<number>('PORT')) || 3000;
  }

  get databaseUrl(): string {
    return this.configService.get<string>('DATABASE_URL');
  }

  get greetingMessage(): string {
    return this.configService.get<string>('GREETING_MESSAGE') || 'Hello from Mentorix!';
  }
}