import { Injectable, Inject } from '@nestjs/common';
import { and, eq } from 'drizzle-orm';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { user_profile } from 'src/drizzle/schema/schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';




@Injectable()
export class AuthService {
    
    constructor(
        private readonly drizzleService: DrizzleService,
        private readonly jwtService: JwtService

        // @Inject('crypto')
        // private drizzleService: PostgresJsDatabase<typeof SCHEMA>
    ){}

    async validateUser(emailId: string, password: string) {
        const userData = await this.drizzleService.db.query.user_profile.findFirst({
            columns:{
                updated_at: false,
                created_at: false,
                is_active: false,
            },
            where: and(
              eq(user_profile.email_id, emailId),
              eq(user_profile.is_active, true),
            ),
          });

        if (userData && (await bcrypt.compare(password, userData.password))) {

            const { password, ...result } = userData;
            return result;
        }
        return null;
    }

    async login(user: any) {

        const payload = { 
            email_id: user.email_id, 
            sub: {
                user_id: user.user_id
            } 
        };

        return {
            ...user,
            access_token: await this.jwtService.sign(payload),
            refresh_token: await this.jwtService.sign(payload, { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '7d' }),
            // access_token: this.jwtService.sign(payload),
            // refresh_token: this.jwtService.sign(payload, { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '7d' }),

        };
    }

    //make it inside use sevice file

    async refreshToken(user: any) {
        const payload = { 
            email_id: user.email_id, 
            sub: {
                user_id: user.user_id
            } 
        };

        return {
            access_token: this.jwtService.sign(payload)
        };
    }

    async getUserProfile(user_id: string) {

        return await this.drizzleService.db.query.user_profile.findFirst({
            columns:{
                created_at: false,
                updated_at: false,
                is_active: false,
                password: false
            },
            where: and(
              eq(user_profile.user_id, user_id),
              eq(user_profile.is_active, true),
            ),
        })
    }




      
    
}
