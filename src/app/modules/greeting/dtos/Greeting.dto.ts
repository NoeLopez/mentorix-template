import { Greeting } from "../domain/models/Greeting";

export class GreetingDto {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  static fromDomain(greeting: Greeting): GreetingDto {
    return new GreetingDto(greeting.message);
  }
}