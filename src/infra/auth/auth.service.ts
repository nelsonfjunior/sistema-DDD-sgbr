/* eslint-disable prettier/prettier */

import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ClienteService } from "src/domain/services/cliente.service";


@Injectable()
export class AuthService {
  constructor(
    private clienteService: ClienteService,
    private jwtService: JwtService
  ) {}

  async signIn(cpf: string): Promise<any> {
    const cliente = await this.clienteService.findByCpf(cpf);
    if (!cliente) {
      throw new UnauthorizedException();
    }
    const payload = { clienteCpf: cliente.cpf, userName: cliente.nomeCompleto };
    const token = {
      access_token: await this.jwtService.signAsync(payload),
    };
    return token;
  }
}