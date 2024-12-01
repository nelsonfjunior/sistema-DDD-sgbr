/* eslint-disable prettier/prettier */

import { ContaResponseDto, CreateContaDto, UpdateContaDto } from "../dto/conta.dto";
import { Conta } from "../entities/conta.entity";

export interface IContaRepository {
    create(conta: CreateContaDto): Promise<Conta>;
    update(id: number, conta: Partial<UpdateContaDto>): Promise<ContaResponseDto> | null;
    delete(id: number): Promise<void>;
    getById(id: number): Promise<ContaResponseDto> | null;
    getAll(): Promise<Conta[]>;
    findOne(options: object): Promise<Conta> | null;
}