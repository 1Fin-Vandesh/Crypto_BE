import { Injectable } from '@nestjs/common';
import { BitcoinConverterDto } from './dto/bitcoin_converter.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class BitcoinConverterService {


  constructor(private readonly httpService:HttpService){};


 async bitcoinConverter(bitcoinConverter: BitcoinConverterDto) {

  try{


       


       return bitcoinConverter;
  } 
  catch(e){

  }
   
  }


}
