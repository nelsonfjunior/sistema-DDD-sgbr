/* eslint-disable prettier/prettier */


import { Cliente } from "./cliente.entity";
import { Transacao } from "./transacao.entity";
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Conta extends Model<Conta>{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column
    numeroConta: number;

    @Column
    saldoInicial: number;

    @Column
    status: boolean;

    @ForeignKey(() => Cliente)
    @Column
    clienteId: number;

    @BelongsTo(() => Cliente, 'clienteId')
    cliente: Cliente;

    @HasMany(() => Transacao)
    transacoes: Transacao[];

}