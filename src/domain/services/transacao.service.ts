/* eslint-disable prettier/prettier */

import { Inject, Injectable } from "@nestjs/common";
import { ITransacaoRepository } from "../repositories/itransacao.repository";
import { TRANSACAO_REPOSITORY } from "src/infra/providers/transacao.provider";
import { UpdateTransacaoDto } from "../dto/transacao.dto";
import { Transacao } from "../entities/transacao.entity";

@Injectable()
export class TransacaoService{
    constructor(
        @Inject(TRANSACAO_REPOSITORY) private readonly transacaoRepository: ITransacaoRepository
    ){}

    async create(transacao: any): Promise<void>{
        await this.transacaoRepository.create(transacao);
    }

    async update(id: number, transacao: UpdateTransacaoDto): Promise<Transacao>{
        const transacaoExists = await this.transacaoRepository.getById(id);
        if(!transacaoExists){
            throw new Error('Transação não encontrada');
        }
        return await this.transacaoRepository.update(id, transacao);
    }

    async delete(id: number): Promise<void>{
        await this.transacaoRepository.delete(id);
    }

    async getById(id: number): Promise<Transacao>{
        return await this.transacaoRepository.getById(id);
    }

    async getAll(): Promise<Transacao[]>{
        return await this.transacaoRepository.getAll();
    }
    
}