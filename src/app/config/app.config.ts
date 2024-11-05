import { ConfigModule, ConfigService } from "@nestjs/config";

const ENV = process.env.NODE_ENV || "development";

ConfigModule.forRoot({
  envFilePath: `.env.${ENV}`,
  isGlobal: true
});

export { ConfigModule, ConfigService };