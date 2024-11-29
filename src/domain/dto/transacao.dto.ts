/* eslint-disable prettier/prettier */

import { IsDecimal, IsEnum, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class CreateTransacaoDto{
    @IsInt()I
    @IsOptional()
    id: number;

    @IsNotEmpty()
    data: Date;

    @IsEnum(['DEPOSITO', 'SAQUE', 'TRANSFERENCIA'])
    @IsNotEmpty()
    tipo: 'DEPOSITO' | 'SAQUE' | 'TRANSFERENCIA';

    @IsDecimal()
    @IsNotEmpty()
    valor: number;

    @IsInt()
    @IsNotEmpty()
    contaOrigemId: number;

    @IsInt()
    @IsNotEmpty()
    contaDestinoId: number;

}

export class UpdateTransacaoDto{
    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsOptional()
    data: Date;

    @IsEnum(['DEPOSITO', 'SAQUE', 'TRANSFERENCIA'])
    @IsOptional()
    tipo: 'DEPOSITO' | 'SAQUE' | 'TRANSFERENCIA';

    @IsDecimal()
    @IsOptional()
    valor: number;

    @IsInt()
    @IsNotEmpty()
    contaOrigemId: number;

    @IsInt()
    @IsNotEmpty()
    contaDestinoId: number;

}