/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Cliente } from "./domain/entities/cliente.entity";
import { Conta } from "./domain/entities/conta.entity";
import { Transacao } from "./domain/entities/transacao.entity";


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'banco',
      models: [Cliente, Conta, Transacao], 
      autoLoadModels: true,
      synchronize: true, 
    }),
    SequelizeModule.forFeature([Cliente, Conta, Transacao]), 
  ],
  exports: [SequelizeModule], 
})
export class DatabaseModule {}