/* eslint-disable prettier/prettier */

import { Body, Controller, HttpCode, HttpStatus, Post  } from "@nestjs/common";
import { Public } from "./constants/constants";
import { AuthService } from "./auth.service";
import { AuthDto } from "src/domain/dto/cliente.dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() auth: AuthDto) {
    return await this.authService.signIn(auth.cpf);
  }

}