/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ClienteModule } from './infra/modules/cliente.module';

@Module({
  imports: [DatabaseModule, ClienteModule],
})
export class AppModule {}
