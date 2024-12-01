/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { ClienteModule } from "../modules/cliente.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/constants";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [
      ClienteModule,
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '360000000s' },
      }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
  })
  export class AuthModule {}