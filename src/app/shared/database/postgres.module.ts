import { Module } from '@nestjs/common';
import { PostgresService } from "./postgres.service";
import { PostgresProvider } from "./postgres.provider";

@Module({
  providers: [PostgresProvider],
  exports: [PostgresService],
})
export class PostgresModule {}