import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from '@nestjs/config';


@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor(
        private readonly configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromHeader('refresh_token'),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_REFRESH_SECRET
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, email: payload.email };
    }


}