/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ContaResponseDto, CreateContaDto, UpdateContaDto } from "src/domain/dto/conta.dto";
import { Conta } from "src/domain/entities/conta.entity";
import { ContaService } from "src/domain/services/conta.service";

@ApiTags('contas')
@Controller('contas')
export class ContaController{
    constructor(
        private readonly contaService: ContaService
    ){}

    @ApiOperation({ summary: 'Criar uma nova conta', description: 'Ao passar uma conta válida ele insere essa conta no banco de dados.' })
    @ApiResponse({ status: 200, description: 'Conta criado com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível criar a conta!'})
    @Post()
    async create(@Body() conta: CreateContaDto): Promise<Conta>{
        return await this.contaService.create(conta);
    }

    @ApiOperation({ summary: 'Atualizar uma conta', description: 'Ao passar uma conta válida ele atualiza essa conta no banco de dados.' })
    @ApiParam({ name: 'id', type: Number, description: 'ID da conta', example: 1 })
    @ApiResponse({ status: 200, description: 'Conta atualizada com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível atualizar a conta!'})
    @Put(':id')
    async update(@Param('id') id: number, @Body() conta: UpdateContaDto): Promise<ContaResponseDto>{
        return await this.contaService.update(id, conta);
    }

    @ApiOperation({ summary: 'Atualizar status de uma conta', description: 'Ao passar uma conta válida ele atualiza o status dessa conta no banco de dados.' })
    @ApiParam({ name: 'id', type: Number, description: 'ID da conta', example: 1 })
    @ApiResponse({ status: 200, description: 'Status da conta atualizado com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível atualizar o status da conta!'})
    @Patch(':id')
    async updateStatus(@Param('id') id: number): Promise<ContaResponseDto>{
        return await this.contaService.updateStatus(id);
    }

    @ApiOperation({ summary: 'Deletar uma conta', description: 'Ao passar uma conta válida ele deleta essa conta no banco de dados.' })
    @ApiParam({ name: 'id', type: Number, description: 'ID da conta', example: 1 })
    @ApiResponse({ status: 200, description: 'Conta deletada com sucesso!'})
    @ApiResponse({ status: 400, description: 'Não foi possível deletar a conta!'})
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        await this.contaService.delete(id);
    }

    @ApiOperation({ summary: 'Buscar uma conta', description: 'Ao passar uma conta válida ele busca essa conta no banco de dados.' })
    @ApiParam({ name: 'id', type: Number, description: 'ID da conta', example: 1 })
    @ApiResponse({ status: 200, description: 'Conta encontrada!'})
    @ApiResponse({ status: 400, description: 'Conta não encontrada!'})
    @Get(':id')
    async getById(@Param('id') id: number): Promise<ContaResponseDto>{
        return await this.contaService.getById(id);
    }

    @ApiOperation({ summary: 'Buscar todas as contas', description: 'Busca todas as contas no banco de dados.' })
    @ApiResponse({ status: 200, description: 'Contas encontradas!'})
    @ApiResponse({ status: 400, description: 'Contas não encontradas!'})
    @Get()
    async getAll(): Promise<Conta[]>{
        return await this.contaService.getAll();
    }

}