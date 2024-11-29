/* eslint-disable prettier/prettier */
import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Conta } from "./conta.entity";


@Table
export class Cliente extends Model<Cliente>{

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column
    nomeCompleto: string;

    @Column({unique: true})
    cpf: string;

    @Column
    dataNascimento: Date;

    @HasMany(() => Conta)
    contas: Conta[];

}