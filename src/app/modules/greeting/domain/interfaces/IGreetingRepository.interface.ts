import { Greeting } from "../models/Greeting";

export const IGreetingRepository = Symbol('IGreetingRepository');

export interface IGreetingRepository {
  getGreeting(): Promise<Greeting>;
}