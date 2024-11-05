import { Injectable } from "@nestjs/common";
import { IGreetingRepository } from "../../domain/interfaces/IGreetingRepository.interface";
import { Greeting } from "../../domain/models/Greeting";

@Injectable()
export class GetGreetingUseCase {
  constructor(private readonly greetingRepository: IGreetingRepository) {
  }

  async execute(): Promise<Greeting> {
    return this.greetingRepository.getGreeting();
  }
}