/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDecimal, IsInt, IsNotEmpty, IsOptional } from "class-validator";
import { Transacao } from "../entities/transacao.entity";

export class CreateContaDto{
    @IsInt()
    @IsOptional()
    id: number;

    @IsInt()
    @IsOptional()
    numeroConta: number;

    @ApiProperty({ example: 1000.00, description: 'Saldo inicial da conta' })
    @IsDecimal()
    @IsOptional()
    saldoInicial: number;

    @ApiProperty({ example: true, description: 'Status da conta' })
    @IsBoolean()
    @IsNotEmpty()
    status: boolean;

    @ApiProperty({ example: 1, description: 'ID do cliente' })
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
  
    @ApiProperty({ example: 1000.00, description: 'Saldo inicial da conta' })
    @IsDecimal()
    @IsOptional()
    saldoInicial: number;
  
    @ApiProperty({ example: true, description: 'Status da conta' })
    @IsBoolean()
    @IsOptional()
    status: boolean;
  
    @ApiProperty({ example: 1, description: 'ID do cliente' })
    @IsInt()
    @IsOptional()
    clienteId: number;
}

export class ContaResponseDto{
    @IsInt()
    @IsOptional()
    id: number;

    @IsInt()
    @IsOptional()
    numeroConta: number;

    @ApiProperty({ example: 1000.00, description: 'Saldo inicial da conta' })
    @IsDecimal()
    @IsOptional()
    saldoInicial: number;

    @ApiProperty({ example: true, description: 'Status da conta' })
    @IsBoolean()
    @IsNotEmpty()
    status: boolean;

    @ApiProperty({ example: 1, description: 'ID do cliente' })
    @IsInt()
    @IsNotEmpty()
    clienteId: number;

    @ApiProperty({
        type: () => [Transacao], 
        description: 'Lista de transacoes de origem relacionadas',
    })
    transacoes: Transacao[];
    
}