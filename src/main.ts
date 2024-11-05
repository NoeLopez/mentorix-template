import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function mentorix() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log('Mentorix is running on: http://localhost:3000');
  console.log('Greeting from Mentorix: http://localhost:3000/greet');
}
void mentorix();
