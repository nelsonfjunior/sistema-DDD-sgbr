/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateClienteDto, UpdateClienteDto } from "src/domain/dto/cliente.dto";
import { Cliente } from "src/domain/entities/cliente.entity";
import { ClienteService } from "src/domain/services/cliente.service";

@ApiTags('clientes')
@Controller('clientes')
export class ClienteController{
    constructor(
        private readonly clienteService: ClienteService
    ){}

    @ApiOperation({ summary: 'Criar um novo cliente', description: 'Ao passar um cliente válido ele insere esse cliente no banco de dados.' })
    @ApiResponse({ status: 200, description: 'Cliente criado com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível criar o cliente!'})
    @Post()
    async create(@Body() cliente: CreateClienteDto): Promise<Cliente>{
        return await this.clienteService.create(cliente);
    }

    @ApiOperation({ summary: 'Atualizar um cliente', description: 'Ao passar um cliente válido ele atualiza esse cliente no banco de dados.' })
    @ApiParam({ name: 'id', type: Number, description: 'ID do cliente', example: 1 })
    @ApiResponse({ status: 200, description: 'Cliente atualizado com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível atualizar o cliente!'})
    @Put(':id')
    async update(@Param('id') id: number ,@Body() cliente: UpdateClienteDto): Promise<Cliente>{
        return await this.clienteService.update(id, cliente);
    }

    @ApiOperation({ summary: 'Deletar um cliente', description: 'Ao passar um cliente válido ele deleta esse cliente no banco de dados.' })
    @ApiParam({ name: 'id', type: Number, description: 'ID do cliente', example: 1 })
    @ApiResponse({ status: 200, description: 'Cliente deletado com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível deletar o cliente!'})
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        await this.clienteService.delete(id);
    }

    @ApiOperation({ summary: 'Buscar um cliente', description: 'Ao passar um cliente válido ele busca esse cliente no banco de dados.' })
    @ApiParam({ name: 'id', type: Number, description: 'ID do cliente', example: 1 })
    @ApiResponse({ status: 200, description: 'Cliente encontrado!'})
    @ApiResponse({ status: 400, description: 'Cliente não encontrado!'})
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Cliente>{
        return await this.clienteService.getById(id);
    }

    @ApiOperation({ summary: 'Buscar todos os clientes', description: 'Busca todos os clientes no banco de dados.' })
    @ApiResponse({ status: 200, description: 'Clientes encontrados!'})
    @ApiResponse({ status: 400, description: 'Clientes não encontrados!'})
    @Get()
    async getAll(): Promise<Cliente[]>{
        return await this.clienteService.getAll();
    }
    
}