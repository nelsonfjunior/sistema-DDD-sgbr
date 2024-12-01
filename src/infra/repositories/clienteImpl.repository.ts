/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ClienteResponseDto, CreateClienteDto, UpdateClienteDto } from "src/domain/dto/cliente.dto";
import { Cliente } from "src/domain/entities/cliente.entity";
import { Conta } from "src/domain/entities/conta.entity";
import { IClienteRepository } from "src/domain/repositories/icliente.repository";


@Injectable()
export class ClienteRepositoryImpl implements IClienteRepository{

    constructor(
        @InjectModel(Cliente) private readonly clienteModel: typeof Cliente
      ) {}

      async findOne(options: object): Promise<ClienteResponseDto> | null {
        return await this.clienteModel.findOne(options);
      }
    
      async create(cliente: CreateClienteDto): Promise<ClienteResponseDto> {
        return await this.clienteModel.create(cliente);
      }
     
      async update(id: number, cliente: UpdateClienteDto): Promise<ClienteResponseDto> {
        await this.clienteModel.update(cliente, { where: { id } });
        return this.getById(id);
      }
    
      async delete(id: number): Promise<void> {
        await this.clienteModel.destroy({ where: { id } });
      }
    
      async getById(id: number): Promise<ClienteResponseDto> {
        const cliente = await Cliente.findOne({
          where: { id },
          include: [{ model: Conta }],
        });
      
        if (!cliente) return null;
      
        return {
          id: cliente.id,
          nomeCompleto: cliente.nomeCompleto,
          cpf: cliente.cpf,
          dataNascimento: cliente.dataNascimento,
          contas: cliente.contas,
        };
      }
    
      async getAll(): Promise<ClienteResponseDto[]> {
        return await this.clienteModel.findAll();
      }

}
