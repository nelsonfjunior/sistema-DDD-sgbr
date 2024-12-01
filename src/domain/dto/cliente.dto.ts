/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Conta } from "../entities/conta.entity";

export class CreateClienteDto{ 
    @IsInt()
    @IsOptional()
    id: number

    @ApiProperty({ example: 'João da Silva', description: 'Nome completo do cliente' })
    @IsString()
    @IsNotEmpty()
    nomeCompleto: string;

    @ApiProperty({ example: '123.456.789-00', description: 'CPF do cliente' })
    @IsString()
    @IsNotEmpty()
    cpf: string;

    @ApiProperty({ example: '1999-01-01', description: 'Data de nascimento do cliente' })
    @IsDateString()
    @IsNotEmpty()
    dataNascimento: Date;

}

export class UpdateClienteDto {
    @IsInt()
    @IsNotEmpty()
    id: number;
  
    @ApiProperty({ example: 'João da Silva', description: 'Nome completo do cliente' })
    @IsString()
    @IsOptional()
    nomeCompleto: string;
  
    @ApiProperty({ example: '123.456.789-00', description: 'CPF do cliente' })
    @IsString()
    @IsOptional()
    cpf: string;
  
    @ApiProperty({ example: '1999-01-01', description: 'Data de nascimento do cliente' })
    @IsDateString()
    @IsOptional()
    dataNascimento: Date;
  }
  
export class ClienteResponseDto {
    @ApiProperty({ example: 1, description: 'ID do cliente' })
    id: number;
  
    @ApiProperty({ example: 'João da Silva', description: 'Nome completo do cliente' })
    nomeCompleto: string;
  
    @ApiProperty({ example: '123.456.789-00', description: 'CPF do cliente' })
    cpf: string;
  
    @ApiProperty({ example: '1999-01-01', description: 'Data de nascimento do cliente' })
    dataNascimento: Date;
  
    @ApiProperty({
      type: () => [Conta], 
      description: 'Lista de contas relacionadas',
    })
    contas: Conta[];
}

export class AuthDto {
  @ApiProperty({ example: '123.456.789-00', description: 'CPF do cliente' })
  cpf: string;
}