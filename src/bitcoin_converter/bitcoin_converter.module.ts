import { Module } from '@nestjs/common';
import { BitcoinConverterService } from './bitcoin_converter.service';
import { BitcoinConverterController } from './bitcoin_converter.controller';

@Module({
  controllers: [BitcoinConverterController],
  providers: [BitcoinConverterService],
})
export class BitcoinConverterModule {}
