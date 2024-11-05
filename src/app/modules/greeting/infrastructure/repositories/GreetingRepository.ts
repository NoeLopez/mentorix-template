import { Injectable } from "@nestjs/common";
import { IGreetingRepository } from "../../domain/interfaces/IGreetingRepository.interface";
import { Greeting } from "../../domain/models/Greeting";
import { AppConfigService } from "../../../../config/app-config.service";

@Injectable()
export class GreetingRepository implements IGreetingRepository {

  constructor(private readonly configService: AppConfigService) {
  }

  async getGreeting(): Promise<Greeting> {
    const message = this.configService.greetingMessage;
    return new Greeting(message);
  }

}