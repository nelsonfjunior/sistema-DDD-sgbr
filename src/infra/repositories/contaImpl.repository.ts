/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ContaResponseDto, CreateContaDto, UpdateContaDto } from "src/domain/dto/conta.dto";
import { Conta } from "src/domain/entities/conta.entity";
import { Transacao } from "src/domain/entities/transacao.entity";
import { IContaRepository } from "src/domain/repositories/iconta.repository";

@Injectable()
export class ContaRepositoryImpl implements IContaRepository{

    constructor(
        @InjectModel(Conta) private readonly contaModel: typeof Conta
    ){}

    async create(conta: CreateContaDto): Promise<Conta> {
        return await this.contaModel.create(conta);
    }

    async update(id: number, conta: Partial<UpdateContaDto>): Promise<ContaResponseDto> | null {
        await this.contaModel.update(conta, { where: { id } });
        return this.getById(id);
    }

    async delete(id: number): Promise<void> {
        await this.contaModel.destroy({ where: { id } });
    }

    async getById(id: number): Promise<ContaResponseDto>{
        const conta = await Conta.findOne({
            where: { id },
            include: [
                { model: Transacao },
            ],
        });

        if (!conta) return null;

        return {
            id: conta.id,
            numeroConta: conta.numeroConta,
            saldoInicial: conta.saldoInicial,
            status: conta.status,
            clienteId: conta.clienteId,
            transacoes: conta.transacoes
        };
    }

    getAll(): Promise<Conta[]> {
        return this.contaModel.findAll();
    }

    async findOne(options: object): Promise<Conta> | null {
        return await this.contaModel.findOne(options);
    }

}