/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateContaDto, UpdateContaDto } from "src/domain/dto/conta.dto";
import { Conta } from "src/domain/entities/conta.entity";
import { ContaService } from "src/domain/services/conta.service";

@Controller('contas')
export class ContaController{
    constructor(
        private readonly contaService: ContaService
    ){}

    @Post()
    async create(@Body() conta: CreateContaDto): Promise<Conta>{
        return await this.contaService.create(conta);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() conta: UpdateContaDto): Promise<Conta>{
        return await this.contaService.update(conta.id, conta);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        await this.contaService.delete(id);
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Conta>{
        return await this.contaService.getById(id);
    }

    @Get()
    async getAll(): Promise<Conta[]>{
        return await this.contaService.getAll();
    }

}