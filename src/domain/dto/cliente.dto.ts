/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { isCpf } from "src/utils/validation/isCpf.validator";


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
    @isCpf()
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
    @isCpf()
    cpf: string;
  
    @ApiProperty({ example: '1999-01-01', description: 'Data de nascimento do cliente' })
    @IsDateString()
    @IsOptional()
    dataNascimento: Date;
  }