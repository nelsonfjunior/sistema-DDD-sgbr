/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTransacaoDto, UpdateTransacaoDto } from "src/domain/dto/transacao.dto";
import { Transacao } from "src/domain/entities/transacao.entity";
import { TransacaoService } from "src/domain/services/transacao.service";

@ApiTags('transacoes')
@Controller('transacoes')
export class TransacaoController{
    constructor(
        private readonly transacaoService: TransacaoService
    ){}

    @ApiOperation({ summary: 'Criar uma nova transação', description: 'Ao passar uma transação válida ele insere essa transação no banco de dados.' })
    @ApiResponse({ status: 200, description: 'Transação criada com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível criar a transação!'})
    @Post()
    async create(@Body() transacao: CreateTransacaoDto): Promise<void>{
        await this.transacaoService.create(transacao);
    }

    @ApiOperation({ summary: 'Atualizar uma transação', description: 'Ao passar uma transação válida ele atualiza essa transação no banco de dados.' })
    @ApiParam({ name: 'id', type: Number, description: 'ID da transação', example: 1 })
    @ApiResponse({ status: 200, description: 'Transação atualizada com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível atualizar a transação!'})
    @Put(':id')
    async update(@Param('id') id: number, @Body() transacao: UpdateTransacaoDto): Promise<Transacao>{
        return await this.transacaoService.update(id, transacao);
    }

    @ApiOperation({ summary: 'Deletar uma transação', description: 'Ao passar uma transação válida ele deleta essa transação no banco de dados.' })
    @ApiParam({ name: 'id', type: Number, description: 'ID da transação', example: 1 })
    @ApiResponse({ status: 200, description: 'Transação deletada com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível deletar a transação!'})
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        await this.transacaoService.delete(id);
    }

    @ApiOperation({ summary: 'Buscar uma transação', description: 'Ao passar uma transação válida ele busca essa transação no banco de dados.' })
    @ApiParam({ name: 'id', type: Number, description: 'ID da transação', example: 1 })
    @ApiResponse({ status: 200, description: 'Transação encontrada!'})
    @ApiResponse({ status: 400, description: 'Transação não encontrada!'})
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Transacao>{
        return await this.transacaoService.getById(id);
    }

    @ApiOperation({ summary: 'Buscar todas as transações', description: 'Busca todas as transações no banco de dados.' })
    @ApiResponse({ status: 200, description: 'Transações encontradas!'})
    @ApiResponse({ status: 400, description: 'Transações não encontradas!'})
    @Get()
    async getAll(): Promise<Transacao[]>{
        return await this.transacaoService.getAll();
    }

}