/* eslint-disable prettier/prettier */

import { Conta } from "./conta.entity";
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Transacao extends Model<Transacao>{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.DATE)
    data: Date;

    @Column({type: DataType.ENUM('DEPOSITO', 'SAQUE', 'TRANSFERENCIA')})
    tipo: 'DEPOSITO' | 'SAQUE' | 'TRANSFERENCIA';

    @Column(DataType.FLOAT)
    valor: number;

    @ForeignKey(() => Conta)
    @Column
    contaOrigemId: number;

    @BelongsTo(() => Conta, 'contaOrigemId')
    contaOrigem: Conta;

    @ForeignKey(() => Conta)
    @Column
    contaDestinoId: number;

    @BelongsTo(() => Conta, 'contaDestinoId')
    contaDestino: Conta;

}