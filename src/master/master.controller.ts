import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterService } from './master.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Master')
@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Post()
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.masterService.create(createMasterDto);
  }

  // @Get()
  // findAll() {
  //   return this.masterService.findAll();
  // }

  @Get(':coin/search-crypto')
  findCoin(@Param('coin') coin: string) {
    return this.masterService.findCryptoCoins(coin);
  }

  @Get(':id/search-count-increase')
  findOne(@Param('id') id: string) {
    return this.masterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterDto: UpdateMasterDto) {
    return this.masterService.update(+id, updateMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterService.remove(+id);
  }

  @Get('trending-crypto')
  getTrendingCrypto() {
    return this.masterService.getTrendingCrypto();
  }

  @Get('top-gainer-loser')
  topGainerAndLoser() {
    return this.masterService.topGainerAndLoser();
  }

  @Get('top-currency-token')
  topDigitalCurrencyToken() {
    return this.masterService.topDigitalCurrencyToken();
  }

   /*
   // RahulYadav:Get All Crypto Categories
   */
  
  @Get('crypto-categories')
  GetAllCategories(){
    return this.masterService
  }

}
