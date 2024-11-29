/* eslint-disable prettier/prettier */

import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { isCpf } from "src/utils/validation/isCpf.validator";


export class CreateClienteDto{
    @IsInt()
    @IsOptional()
    id: number

    @IsString()
    @IsNotEmpty()
    nomeCompleto: string;

    @IsString()
    @IsNotEmpty()
    @isCpf()
    cpf: string;

    @IsDateString()
    @IsNotEmpty()
    dataNascimento: Date;
}

export class UpdateClienteDto {
    @IsInt()
    @IsNotEmpty()
    id: number;
  
    @IsString()
    @IsOptional()
    nomeCompleto: string;
  
    @IsString()
    @IsOptional()
    @isCpf()
    cpf: string;
  
    @IsDateString()
    @IsOptional()
    dataNascimento: Date;
  }