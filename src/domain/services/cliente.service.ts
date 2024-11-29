/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { CLIENTE_REPOSITORY } from './../../infra/providers/cliente.provider';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IClienteRepository } from '../repositories/icliente.repository';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../dto/cliente.dto.';
import { validateOrReject } from 'class-validator';

@Injectable()
export class ClienteService {
  constructor(
    @Inject(CLIENTE_REPOSITORY)private readonly clienteRepository: IClienteRepository) {}

  async create(cliente: CreateClienteDto): Promise<Cliente> {
    try{
      await validateOrReject(cliente);
    }catch(errors){
      throw new BadRequestException('Validação falhou.');
    }
    
    const existingCliente = await this.clienteRepository.findOne({ 
      where: { cpf: cliente.cpf } 
    });

    if (existingCliente) {
      throw new BadRequestException('CPF já cadastrado');
    }
    return await this.clienteRepository.create(cliente);
  }

  async update(id: number, cliente: CreateClienteDto): Promise<Cliente> {
    const clienteExists = await this.clienteRepository.getById(id);
    if (!clienteExists) {
      throw new Error('Cliente não encontrado');
    }
    return await this.clienteRepository.update(id, cliente);
  }

  async delete(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }

  async getById(id: number): Promise<Cliente> {
    return await this.clienteRepository.getById(id);
  }

  async getAll(): Promise<Cliente[]> {
    return await this.clienteRepository.getAll();
  }

}
