import { Module } from '@nestjs/common';
import { BitcoinConverterService } from './bitcoin_converter.service';
import { BitcoinConverterController } from './bitcoin_converter.controller';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports:[HttpModule],
  controllers: [BitcoinConverterController],
  providers: [BitcoinConverterService],
})
export class BitcoinConverterModule {}
