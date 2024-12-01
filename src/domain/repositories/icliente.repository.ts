/* eslint-disable prettier/prettier */

import { ClienteResponseDto, CreateClienteDto, UpdateClienteDto } from "../dto/cliente.dto";

export interface IClienteRepository {
    create(cliente: CreateClienteDto): Promise<ClienteResponseDto>;
    update(id: number, cliente: Partial<UpdateClienteDto>): Promise<ClienteResponseDto> | null;
    delete(id: number): Promise<void>;
    getById(id: number): Promise<ClienteResponseDto> | null;
    getAll(): Promise<ClienteResponseDto[]>;
    findOne(options: object): Promise<ClienteResponseDto> | null;
}