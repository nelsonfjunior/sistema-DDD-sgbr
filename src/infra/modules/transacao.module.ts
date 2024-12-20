/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TransacaoController } from "src/application/controller/transacao.controller";
import { Transacao } from "src/domain/entities/transacao.entity";
import { TransacaoService } from "src/domain/services/transacao.service";
import { transacaoProvider } from "../providers/transacao.provider";
import { ContaModule } from "./conta.module";

@Module({
    imports: [
      SequelizeModule.forFeature([Transacao]),
      ContaModule
    ],
    controllers: [TransacaoController],
    providers: [
      TransacaoService,
      ...transacaoProvider,
    ],
    exports: [
      TransacaoService,
      ...transacaoProvider,
    ], 
  })
export class TransacaoModule{}