/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { CLIENTE_REPOSITORY } from './../../infra/providers/cliente.provider';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IClienteRepository } from '../repositories/icliente.repository';
import { ClienteResponseDto, CreateClienteDto, UpdateClienteDto } from '../dto/cliente.dto';
import { validateOrReject } from 'class-validator';

@Injectable()
export class ClienteService {
  constructor(
    @Inject(CLIENTE_REPOSITORY)private readonly clienteRepository: IClienteRepository) {}

  async create(cliente: CreateClienteDto): Promise<ClienteResponseDto> {
    try{
      await validateOrReject(cliente);
    }catch(errors){
      throw new HttpException('Validação falhou.', HttpStatus.BAD_REQUEST);
    }
    
    const existingCliente = await this.clienteRepository.findOne({ 
      where: { cpf: cliente.cpf } 
    });

    if (existingCliente) {
      throw new HttpException('CPF já cadastrado', HttpStatus.BAD_REQUEST);
    }
    return await this.clienteRepository.create(cliente);
  }

  async update(id: number, cliente: UpdateClienteDto): Promise<ClienteResponseDto> {
    const clienteExists = await this.clienteRepository.getById(id);
    if (!clienteExists) {
      throw new HttpException('Cliente não encontrado', HttpStatus.BAD_REQUEST);
    }
    return await this.clienteRepository.update(id, cliente);
  }

  async delete(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }

  async getById(id: number): Promise<ClienteResponseDto> {
    const cliente = await this.clienteRepository.getById(id);
    if(!cliente){
      throw new HttpException('Cliente não encontrado', HttpStatus.BAD_REQUEST);
    }
    return cliente;
  }

  async getAll(): Promise<ClienteResponseDto[]> {
    return await this.clienteRepository.getAll();
  }

}
