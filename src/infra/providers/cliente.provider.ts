/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { ClienteRepositoryImpl } from "../repositories/clienteImpl.repository";

export const CLIENTE_REPOSITORY = 'CLIENTE_REPOSITORY';

export const clienteProvider = [
    {
        provide: CLIENTE_REPOSITORY,
        useClass: ClienteRepositoryImpl
    }
]