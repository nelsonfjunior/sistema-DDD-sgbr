/* eslint-disable prettier/prettier */

import { IsBoolean, IsDecimal, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class CreateContaDto{
    @IsInt()
    @IsOptional()
    id: number;

    @IsInt()
    @IsOptional()
    numeroConta: number;

    @IsDecimal()
    @IsOptional()
    saldoInicial: number;

    @IsBoolean()
    @IsNotEmpty()
    status: boolean;

    @IsInt()
    @IsNotEmpty()
    clienteId: number
}

export class UpdateContaDto {
    @IsInt()
    @IsNotEmpty()
    id: number;
  
    @IsInt()
    @IsOptional()
    numeroConta: number;
  
    @IsDecimal()
    @IsOptional()
    saldoInicial: number;
  
    @IsBoolean()
    @IsOptional()
    status: boolean;
  
    @IsInt()
    @IsOptional()
    clienteId: number;
}