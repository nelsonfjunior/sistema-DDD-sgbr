/* eslint-disable prettier/prettier */

import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { ITransacaoRepository } from "../repositories/itransacao.repository";
import { TRANSACAO_REPOSITORY } from "src/infra/providers/transacao.provider";
import { CreateTransacaoDto, CreateTransacaoTransferenciaDto } from "../dto/transacao.dto";
import { Transacao } from "../entities/transacao.entity";
import { CONTA_REPOSITORY } from "src/infra/providers/conta.provider";
import { IContaRepository } from "../repositories/iconta.repository";

@Injectable()
export class TransacaoService{
    constructor(
        @Inject(TRANSACAO_REPOSITORY) private readonly transacaoRepository: ITransacaoRepository,
        @Inject(CONTA_REPOSITORY) private readonly contaRepository: IContaRepository
    ){}

    async deposito(transacao: CreateTransacaoDto): Promise<Transacao>{
         const {contaOrigemId, valor} = transacao;

         if(valor <= 0){
             throw new HttpException('Valor deve ser maior que zero', HttpStatus.BAD_REQUEST);
         }

        const contaOrigemExists = await this.contaRepository.getById(contaOrigemId);
        if(!contaOrigemExists){
            throw new HttpException('Conta de origem não encontrada', HttpStatus.BAD_REQUEST);
        }

        if(contaOrigemExists.status === false){
            throw new HttpException('Conta não está ativa', HttpStatus.BAD_REQUEST);
        }

        contaOrigemExists.saldoInicial += valor;
        await this.contaRepository.update(contaOrigemId, { saldoInicial: contaOrigemExists.saldoInicial });

        const transacaoDeposito = await this.transacaoRepository.create({
            ...transacao,
            tipo: 'DEPOSITO'
        });

        return transacaoDeposito;
    }

    async saque(transacao: CreateTransacaoDto): Promise<Transacao>{
        const {contaOrigemId, valor} = transacao;

        if(valor <= 0){
            throw new HttpException('Valor deve ser maior que zero', HttpStatus.BAD_REQUEST);
        }

        const contaOrigemExists = await this.contaRepository.getById(contaOrigemId);
        if(!contaOrigemExists){
            throw new HttpException('Conta de origem não encontrada', HttpStatus.BAD_REQUEST);
        }

        if(contaOrigemExists.status === false){
            throw new HttpException('Conta não está ativa', HttpStatus.BAD_REQUEST);
        }

        if(contaOrigemExists.saldoInicial < valor){
            throw new HttpException('Saldo insuficiente', HttpStatus.BAD_REQUEST);
        }

        contaOrigemExists.saldoInicial -= valor;
        await this.contaRepository.update(contaOrigemId, { saldoInicial: contaOrigemExists.saldoInicial });

        const transacaoSaque = await this.transacaoRepository.create({
            ...transacao,
            tipo: 'SAQUE'
        });

        return transacaoSaque;
    }

    async transferencia(transacao: CreateTransacaoTransferenciaDto): Promise<Transacao>{
        const {contaOrigemId, contaDestinoId, valor} = transacao;

        if(valor <= 0){
            throw new HttpException('Valor deve ser maior que zero', HttpStatus.BAD_REQUEST);
        }

        const contaOrigemExists = await this.contaRepository.getById(contaOrigemId);
        if(!contaOrigemExists){
            throw new HttpException('Conta de origem não encontrada', HttpStatus.BAD_REQUEST);
        }

        if(contaOrigemExists.status === false){
            throw new HttpException('Conta de origem não está ativa', HttpStatus.BAD_REQUEST);
        }

        const contaDestinoExists = await this.contaRepository.getById(contaDestinoId);
        if(!contaDestinoExists){
            throw new HttpException('Conta de destino não encontrada', HttpStatus.BAD_REQUEST);
        }

        if(contaDestinoExists.status === false){
            throw new HttpException('Conta de destino não está ativa', HttpStatus.BAD_REQUEST);
        }

        if(contaOrigemExists.saldoInicial < valor){
            throw new HttpException('Saldo insuficiente', HttpStatus.BAD_REQUEST);
        }

        contaOrigemExists.saldoInicial -= valor;
        contaDestinoExists.saldoInicial += valor;

        await this.contaRepository.update(contaOrigemId, { saldoInicial: contaOrigemExists.saldoInicial });
        await this.contaRepository.update(contaDestinoId, { saldoInicial: contaDestinoExists.saldoInicial });

        const transacaoTransferencia = await this.transacaoRepository.create({
            ...transacao,
            tipo: 'TRANSFERENCIA'
        });

        return transacaoTransferencia;
    }

    async delete(id: number): Promise<void>{
        await this.transacaoRepository.delete(id);
    }

    async getById(id: number): Promise<Transacao>{
        return await this.transacaoRepository.getById(id);
    }

    async getAll(): Promise<Transacao[]>{
        return await this.transacaoRepository.getAll();
    }
    
}