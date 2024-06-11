import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthController } from './auth.controller';
import { RefreshTokenStrategy } from './strategy/refresh-token.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '3600s' },
      }),
    }),
    // JwtModule.register({
    //   secret: `${process.env.JWT_SECRET}`,
    //   signOptions: { expiresIn: '1h' },
    // }),

  ],
  controllers: [AuthController],
  providers: [AuthService, DrizzleService, LocalStrategy, JwtStrategy, RefreshTokenStrategy],
  exports: [AuthService, LocalStrategy, JwtStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
