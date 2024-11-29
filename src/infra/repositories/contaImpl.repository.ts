/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateContaDto, UpdateContaDto } from "src/domain/dto/conta.dto";
import { Conta } from "src/domain/entities/conta.entity";
import { IContaRepository } from "src/domain/repositories/iconta.repository";

@Injectable()
export class ContaRepositoryImpl implements IContaRepository{

    constructor(
        @InjectModel(Conta) private readonly contaModel: typeof Conta
    ){}

    async create(conta: CreateContaDto): Promise<Conta> {
        return await this.contaModel.create(conta);
    }
    async update(id: number, conta: Partial<UpdateContaDto>): Promise<Conta> | null {
        await this.contaModel.update(conta, { where: { id } });
        return this.getById(id);
    }
    async delete(id: number): Promise<void> {
        await this.contaModel.destroy({ where: { id } });
    }
    async getById(id: number): Promise<Conta> | null {
        return await this.contaModel.findByPk(id);
    }
    getAll(): Promise<Conta[]> {
        return this.contaModel.findAll();
    }
    async findOne(options: object): Promise<Conta> | null {
        return await this.contaModel.findOne(options);
    }

}