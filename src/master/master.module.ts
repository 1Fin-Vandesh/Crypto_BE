import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { MasterController } from './master.controller';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { HttpModule } from '@nestjs/axios';
import { CryptoDataService } from 'src/drizzle/crypto-data-database/drizzle.service';

@Module({
  imports: [HttpModule],
  controllers: [MasterController],
  providers: [MasterService, CryptoDataService],
})
export class MasterModule {}
