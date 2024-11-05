import { Controller, Get } from "@nestjs/common";
import { GetGreetingUseCase } from "../application/use-cases/GetGreeting.usecase";
import { GreetingDto } from "../dtos/Greeting.dto";

@Controller("greet")
export class GreetingController {
  constructor(private readonly getGreetingUseCase: GetGreetingUseCase) {
  }

  @Get()
  async getGreeting() {

    const greeting = await this.getGreetingUseCase.execute();

    return GreetingDto.fromDomain(greeting);
  }
}