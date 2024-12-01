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

    @IsInt()
    @IsOptional()
    contaDestinoId: number;

}

export class CreateTransacaoTransferenciaDto{
    @IsInt()I
    @IsOptional()
    id: number;

    @ApiProperty({ example: '2021-10-10', description: 'Data da transação' })
    @IsNotEmpty()
    data: Date;

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
    @IsOptional()
    contaDestinoId: number;

}
