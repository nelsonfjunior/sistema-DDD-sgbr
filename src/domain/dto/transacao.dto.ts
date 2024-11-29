/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsEnum, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class CreateTransacaoDto{
    @IsInt()I
    @IsOptional()
    id: number;

    @ApiProperty({ example: '2021-10-10', description: 'Data da transação' })
    @IsNotEmpty()
    data: Date;

    @ApiProperty({ example: 'DEPOSITO', description: 'Tipo da transação' })
    @IsEnum(['DEPOSITO', 'SAQUE', 'TRANSFERENCIA'])
    @IsNotEmpty()
    tipo: 'DEPOSITO' | 'SAQUE' | 'TRANSFERENCIA';

    @ApiProperty({ example: 100.00, description: 'Valor da transação' })
    @IsDecimal()
    @IsNotEmpty()
    valor: number;

    @ApiProperty({ example: 1, description: 'ID da conta de origem' })
    @IsInt()
    @IsNotEmpty()
    contaOrigemId: number;

    @ApiProperty({ example: 2, description: 'ID da conta de destino' })
    @IsInt()
    @IsNotEmpty()
    contaDestinoId: number;

}

export class UpdateTransacaoDto{
    @IsInt()
    @IsNotEmpty()
    id: number;

    @ApiProperty({ example: '2021-10-10', description: 'Data da transação' })
    @IsOptional()
    data: Date;

    @ApiProperty({ example: 'DEPOSITO', description: 'Tipo da transação' })
    @IsEnum(['DEPOSITO', 'SAQUE', 'TRANSFERENCIA'])
    @IsOptional()
    tipo: 'DEPOSITO' | 'SAQUE' | 'TRANSFERENCIA';

    @ApiProperty({ example: 100.00, description: 'Valor da transação' })
    @IsDecimal()
    @IsOptional()
    valor: number;

    @ApiProperty({ example: 1, description: 'ID da conta de origem' })
    @IsInt()
    @IsNotEmpty()
    contaOrigemId: number;

    @ApiProperty({ example: 2, description: 'ID da conta de destino' })
    @IsInt()
    @IsNotEmpty()
    contaDestinoId: number;

}