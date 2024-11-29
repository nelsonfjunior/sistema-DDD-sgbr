/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTransacaoDto, UpdateTransacaoDto } from "src/domain/dto/transacao.dto";
import { Transacao } from "src/domain/entities/transacao.entity";
import { TransacaoService } from "src/domain/services/transacao.service";

@Controller('transacoes')
export class TransacaoController{
    constructor(
        private readonly transacaoService: TransacaoService
    ){}

    @Post()
    async create(@Body() transacao: CreateTransacaoDto): Promise<void>{
        await this.transacaoService.create(transacao);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() transacao: UpdateTransacaoDto): Promise<Transacao>{
        return await this.transacaoService.update(id, transacao);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        await this.transacaoService.delete(id);
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Transacao>{
        return await this.transacaoService.getById(id);
    }

    @Get()
    async getAll(): Promise<Transacao[]>{
        return await this.transacaoService.getAll();
    }

}