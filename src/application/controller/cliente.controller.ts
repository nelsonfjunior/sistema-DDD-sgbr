/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateClienteDto } from "src/domain/dto/cliente.dto.";
import { Cliente } from "src/domain/entities/cliente.entity";
import { ClienteService } from "src/domain/services/cliente.service";

@Controller('clientes')
export class ClienteController{
    constructor(
        private readonly clienteService: ClienteService
    ){}

    @Post()
    async create(@Body() cliente: CreateClienteDto): Promise<Cliente>{
        return await this.clienteService.create(cliente);
    }

    @Put(':id')
    async update(@Param('id') id: number ,@Body() cliente: CreateClienteDto): Promise<Cliente>{
        return await this.clienteService.update(id, cliente);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        await this.clienteService.delete(id);
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Cliente>{
        return await this.clienteService.getById(id);
    }

    @Get()
    async getAll(): Promise<Cliente[]>{
        return await this.clienteService.getAll();
    }
    
}