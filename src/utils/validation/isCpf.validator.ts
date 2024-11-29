/* eslint-disable prettier/prettier */

import { registerDecorator, ValidationOptions } from 'class-validator';

export function isCpf(validationOptions?: ValidationOptions){
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function(object: Object, propertyName: string){
        registerDecorator({
            name: 'isCpf',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any){
                    const regex = /^\d{11}$/;
                    return typeof value === 'string' && regex.test(value);
                },
                defaultMessage(){
                    return 'CPF inválido';
                },
            },
        });
    };
}