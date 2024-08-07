import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DrizzleModule } from './drizzle/database/drizzle.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { ConfigModule } from '@nestjs/config';
import { ExceptionLoggerService } from './helpers/exception-logger.service';
import { ExceptionInterceptor } from './utils/interceptors/exception-interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { CryptoDataModule } from './drizzle/crypto-data-database/drizzle.module';
import { MasterModule } from './master/master.module';
import { BitcoinConverterModule } from './bitcoin_converter/bitcoin_converter.module';
import { MasterGatewayModule } from './master/gateway/master_gateway.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DrizzleModule,
    AuthModule,
    UserProfileModule,
    HttpModule,
    ScheduleModule.forRoot(),
    CryptoDataModule,
    MasterModule,
    BitcoinConverterModule,
    MasterGatewayModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ExceptionLoggerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ExceptionInterceptor,
    },
  ],
})
export class AppModule {}
