/* eslint-disable prettier/prettier */

import { TransacaoRepositoryImpl } from "../repositories/transacaoImpl.repository";


export const TRANSACAO_REPOSITORY = 'TRANSACAO_REPOSITORY';

export const transacaoProvider = [
    {
        provide: TRANSACAO_REPOSITORY,
        useClass: TransacaoRepositoryImpl
    }
]