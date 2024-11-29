/* eslint-disable prettier/prettier */

import { ContaRepositoryImpl } from "../repositories/contaImpl.repository";

export const CONTA_REPOSITORY = 'CONTA_REPOSITORY';

export const contaProvider = [
    {
        provide: CONTA_REPOSITORY,
        useClass: ContaRepositoryImpl
    }
]