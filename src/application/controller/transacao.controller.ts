/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateTransacaoDto, CreateTransacaoTransferenciaDto } from "src/domain/dto/transacao.dto";
import { Transacao } from "src/domain/entities/transacao.entity";
import { TransacaoService } from "src/domain/services/transacao.service";

@ApiTags('movimentacoes')
@Controller('movimentacoes')
export class TransacaoController{
    constructor(
        private readonly transacaoService: TransacaoService
    ){}


    @ApiOperation({ summary: 'Criar um depósito', description: 'Ao passar um depósito válido ele insere essa transação no banco de dados.' })
    @ApiResponse({ status: 200, description: 'Depósito criado com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível criar o depósito!'})
    @Post('deposito')
    async deposito(@Body() transacao: CreateTransacaoDto): Promise<Transacao>{
        return await this.transacaoService.deposito(transacao);
    }

    @ApiOperation({ summary: 'Criar um saque', description: 'Ao passar um saque válido ele insere essa transação no banco de dados.' })
    @ApiResponse({ status: 200, description: 'Saque criado com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível criar o saque!'})
    @Post('saque')
    async saque(@Body() transacao: CreateTransacaoDto): Promise<Transacao>{
        return await this.transacaoService.saque(transacao);
    }

    @ApiOperation({ summary: 'Criar uma transferência', description: 'Ao passar uma transferência válida ele insere essa transação no banco de dados.' })
    @ApiResponse({ status: 200, description: 'Transferência criada com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível criar a transferência!'})
    @Post('transferencia')
    async tranferencia(@Body() transacao: CreateTransacaoTransferenciaDto): Promise<Transacao>{
        return await this.transacaoService.transferencia(transacao);
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