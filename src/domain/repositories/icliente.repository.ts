/* eslint-disable prettier/prettier */

import { CreateClienteDto } from "../dto/cliente.dto.";
import { Cliente } from "../entities/cliente.entity";

export interface IClienteRepository {
    create(cliente: CreateClienteDto): Promise<Cliente>;
    update(id: number, cliente: Partial<CreateClienteDto>): Promise<Cliente> | null;
    delete(id: number): Promise<void>;
    getById(id: number): Promise<Cliente> | null;
    getAll(): Promise<Cliente[]>;
    findOne(options: object): Promise<Cliente> | null;
}