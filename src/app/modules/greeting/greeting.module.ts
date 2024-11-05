import { Module } from "@nestjs/common";
import { GreetingController } from "./controllers/Greeting.controller";
import { GetGreetingUseCase } from "./application/use-cases/GetGreeting.usecase";
import { GreetingRepository } from "./infrastructure/repositories/GreetingRepository";
import { IGreetingRepository } from "./domain/interfaces/IGreetingRepository.interface";
import { AppConfigModule } from "../../config/app-config.module";

@Module({
  imports: [AppConfigModule],
  controllers: [GreetingController],
  providers: [
    GetGreetingUseCase,
    {
      provide: IGreetingRepository,
      useClass: GreetingRepository
    }
  ]
})
export class GreetingModule {
}
