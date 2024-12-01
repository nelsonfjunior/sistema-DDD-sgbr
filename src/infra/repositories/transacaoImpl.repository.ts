/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateTransacaoDto } from "src/domain/dto/transacao.dto";
import { Transacao } from "src/domain/entities/transacao.entity";
import { ITransacaoRepository } from "src/domain/repositories/itransacao.repository";

@Injectable()
export class TransacaoRepositoryImpl implements ITransacaoRepository{

    constructor(
        @InjectModel(Transacao) private readonly transacaoModel: typeof Transacao
      ) {}

    async create(transacao: CreateTransacaoDto): Promise<Transacao> {
        return await this.transacaoModel.create(transacao);
    }
    
    async delete(id: number): Promise<void> {
        await this.transacaoModel.destroy({ where: { id } });
    }

    async getById(id: number): Promise<Transacao> {
        return await this.transacaoModel.findByPk(id);
    }

    getAll(): Promise<Transacao[]> {
        return this.transacaoModel.findAll();
    }
    
    findOne(options: object): Promise<Transacao> | null {
        return this.transacaoModel.findOne(options);
    }

}