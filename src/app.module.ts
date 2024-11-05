import { Module } from '@nestjs/common';
import { GreetingModule } from "./app/modules/greeting/greeting.module";
import { AppConfigModule } from "./app/config/app-config.module";

@Module({
  imports: [AppConfigModule, GreetingModule],
})
export class AppModule {}