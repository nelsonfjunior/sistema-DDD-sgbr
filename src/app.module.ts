/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ClienteModule } from './infra/modules/cliente.module';
import { ContaModule } from './infra/modules/conta.module';
import { TransacaoModule } from './infra/modules/transacao.module';
import { AuthModule } from './infra/auth/auth.module';

@Module({
  providers: [
    {
      provide: 'APP_GUARD',
      useValue: 'AuthGuard',
    }
  ],
  imports: [
    DatabaseModule, ClienteModule, ContaModule, TransacaoModule, AuthModule
  ],
})
export class AppModule {}
