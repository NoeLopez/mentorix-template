import { Module } from '@nestjs/common';
import { AppConfig } from "./app/config/app.config";
import { GreetingModule } from "./app/modules/greeting/greeting.module";

@Module({
  imports: [AppConfig, GreetingModule],
})
export class AppModule {}