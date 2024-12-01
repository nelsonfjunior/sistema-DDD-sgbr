/* eslint-disable prettier/prettier */

import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { CONTA_REPOSITORY } from "src/infra/providers/conta.provider";
import { IContaRepository } from "../repositories/iconta.repository";
import { ContaResponseDto, CreateContaDto, UpdateContaDto } from "../dto/conta.dto";
import { Conta } from "../entities/conta.entity";
import { CLIENTE_REPOSITORY } from "src/infra/providers/cliente.provider";
import { IClienteRepository } from "../repositories/icliente.repository";

@Injectable()
export class ContaService{
    constructor(
        @Inject(CONTA_REPOSITORY) private readonly contaRepository: IContaRepository,
        @Inject(CLIENTE_REPOSITORY) private readonly clienteRepository: IClienteRepository
    ){}

    async create(conta: CreateContaDto): Promise<Conta>{
        const contaNumero  = Math.floor(100000 + Math.random() * 900000);
        conta.numeroConta = contaNumero;

        if(conta.saldoInicial < 0){
            throw new HttpException('Saldo não pode ser negativo', HttpStatus.BAD_REQUEST);
        }

        const inicialSaldo = conta.saldoInicial ?? 0;
        conta.saldoInicial = inicialSaldo;

        const existingCliente = await this.clienteRepository.findOne({ 
            where: { id: conta.clienteId } 
        });

        if (!existingCliente){
            throw new HttpException('Cliente não encontrado', HttpStatus.BAD_REQUEST);
        }

        return await this.contaRepository.create(conta);
    }

    async update(id: number, conta: UpdateContaDto): Promise<ContaResponseDto>{
        const contaExists = await this.contaRepository.getById(id);
        if(!contaExists){
            throw new HttpException('Conta não encontrada', HttpStatus.BAD_REQUEST);
        }
        return await this.contaRepository.update(id, conta);
    }

    async updateStatus(id: number): Promise<ContaResponseDto>{
        const contaExists = await this.contaRepository.getById(id);
        if(!contaExists){
            throw new HttpException('Conta não encontrada', HttpStatus.BAD_REQUEST);
        }
        contaExists.status = !contaExists.status;
        return await this.contaRepository.update(id, { status: contaExists.status });
        
    }

    async delete(id: number): Promise<void>{
        await this.contaRepository.delete(id);
    }

    async getById(id: number): Promise<ContaResponseDto>{
        return await this.contaRepository.getById(id);
    }

    async getAll(): Promise<Conta[]>{
        return await this.contaRepository.getAll();
    }
    
}