/* eslint-disable prettier/prettier */

import { CreateTransacaoDto, CreateTransacaoTransferenciaDto } from "../dto/transacao.dto";
import { Transacao } from "../entities/transacao.entity";


export interface ITransacaoRepository {
    create(transacao: CreateTransacaoDto | CreateTransacaoTransferenciaDto): Promise<Transacao>;
    delete(id: number): Promise<void>;
    getById(id: number): Promise<Transacao> | null;
    getAll(): Promise<Transacao[]>;
    findOne(options: object): Promise<Transacao> | null;
}