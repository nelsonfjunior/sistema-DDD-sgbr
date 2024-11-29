/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateClienteDto, UpdateClienteDto } from "src/domain/dto/cliente.dto";
import { Cliente } from "src/domain/entities/cliente.entity";
import { IClienteRepository } from "src/domain/repositories/icliente.repository";


@Injectable()
export class ClienteRepositoryImpl implements IClienteRepository{

    constructor(
        @InjectModel(Cliente) private readonly clienteModel: typeof Cliente
      ) {}

      async findOne(options: object): Promise<Cliente> | null {
        return await this.clienteModel.findOne(options);
      }
    
      async create(cliente: CreateClienteDto): Promise<Cliente> {
        return await this.clienteModel.create(cliente);
      }
     
      async update(id: number, cliente: UpdateClienteDto): Promise<Cliente> {
        await this.clienteModel.update(cliente, { where: { id } });
        return this.getById(id);
      }
    
      async delete(id: number): Promise<void> {
        await this.clienteModel.destroy({ where: { id } });
      }
    
      async getById(id: number): Promise<Cliente> {
        return await this.clienteModel.findByPk(id);
      }
    
      async getAll(): Promise<Cliente[]> {
        return await this.clienteModel.findAll();
      }

}
