/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ClienteModule } from './infra/modules/cliente.module';
import { ContaModule } from './infra/modules/conta.module';
import { TransacaoModule } from './infra/modules/transacao.module';

@Module({
  imports: [DatabaseModule, ClienteModule, ContaModule, TransacaoModule],
})
export class AppModule {}
