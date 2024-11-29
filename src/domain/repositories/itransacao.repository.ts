/* eslint-disable prettier/prettier */

import { CreateTransacaoDto, UpdateTransacaoDto } from "../dto/transacao.dto";
import { Transacao } from "../entities/transacao.entity";


export interface ITransacaoRepository {
    create(transacao: CreateTransacaoDto): Promise<Transacao>;
    update(id: number, transacao: Partial<UpdateTransacaoDto>): Promise<Transacao> | null;
    delete(id: number): Promise<void>;
    getById(id: number): Promise<Transacao> | null;
    getAll(): Promise<Transacao[]>;
    findOne(options: object): Promise<Transacao> | null;
}