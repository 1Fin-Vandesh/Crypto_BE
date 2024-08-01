import { Injectable } from '@nestjs/common';
import { BitcoinConverterDto } from './dto/bitcoin_converter.dto';

@Injectable()
export class BitcoinConverterService {


 async bitcoinConverter(bitcoinConverter: BitcoinConverterDto) {

  try{


 return bitcoinConverter;


  }catch(e){

  }
   
  }


}
