/* eslint-disable prettier/prettier */

import { CreateContaDto, UpdateContaDto } from "../dto/conta.dto";
import { Conta } from "../entities/conta.entity";

export interface IContaRepository {
    create(conta: CreateContaDto): Promise<Conta>;
    update(id: number, conta: Partial<UpdateContaDto>): Promise<Conta> | null;
    delete(id: number): Promise<void>;
    getById(id: number): Promise<Conta> | null;
    getAll(): Promise<Conta[]>;
    findOne(options: object): Promise<Conta> | null;
}