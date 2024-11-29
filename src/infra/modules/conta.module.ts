/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Conta } from "src/domain/entities/conta.entity";
import { ContaService } from "src/domain/services/conta.service";
import { contaProvider } from "../providers/conta.provider";
import { ContaController } from "src/application/controller/conta.controller";
import { ClienteModule } from "./cliente.module";


@Module({
    imports: [
      SequelizeModule.forFeature([Conta]),
      ClienteModule
    ],
    controllers: [ContaController],
    providers: [
      ContaService,
      ...contaProvider,
    ],
    exports: [
      ContaService,
      ...contaProvider,
    ], 
  })
  export class ContaModule {}