import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class ApiProvider {
  constructor(private readonly httpService: HttpService) {}

  async getGreetingFromApi(): Promise<string> {
    try {
      const response = await this.httpService
        .get('https://api.example.com/greeting')
        .toPromise();
      return response.data.message;
    } catch (error) {
      throw new Error(`Error fetching greeting from API: ${error.message}`);
    }
  }
}