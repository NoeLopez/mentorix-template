import { Module } from "@nestjs/common";
import { GreetingController } from "./controllers/Greeting.controller";
import { GetGreetingUseCase } from "./application/use-cases/GetGreeting.usecase";
import { GreetingRepository } from "./infrastructure/repositories/GreetingRepository";

@Module({
  controllers: [GreetingController],
  providers: [
    GetGreetingUseCase,
    { provide: "IGreetingRepository", useClass: GreetingRepository }
  ]
})
export class GreetingModule {
}
