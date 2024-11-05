import { Greeting } from "../models/Greeting";

export interface IGreetingRepository {
  getGreeting(): Promise<Greeting>;
}