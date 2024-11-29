/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { ClienteController } from 'src/application/controller/cliente.controller';
import { ClienteService } from 'src/domain/services/cliente.service';
import { clienteProvider } from '../providers/cliente.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cliente } from 'src/domain/entities/cliente.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Cliente]),
  ],
  controllers: [ClienteController],
  providers: [
    ClienteService,
    ...clienteProvider,
  ],
  exports: [ClienteService], 
})
export class ClienteModule {}
