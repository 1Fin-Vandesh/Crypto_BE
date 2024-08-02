import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BitcoinConverterService } from './bitcoin_converter.service';
import { BitcoinConverterDto } from './dto/bitcoin_converter.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bitcoin-converter')
@ApiTags('Bitcoin Converter')
export class BitcoinConverterController {
  constructor(private readonly bitcoinConverterService: BitcoinConverterService) {}

  
  @Post('convert_bitcoin')
  bitcoinConverter(@Body() createBitcoinConverterDto: BitcoinConverterDto) {
    return this.bitcoinConverterService.bitcoinConverter(createBitcoinConverterDto);
  }
}
