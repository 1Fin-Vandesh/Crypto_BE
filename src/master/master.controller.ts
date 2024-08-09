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
import { GlobalSearchDto } from './dto/global_search.dto';

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

  @Get('search-count-increase/:id')
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

  @Get('top-gainer')
  topGainerCryptos() {
    return this.masterService.topGainerCryptos();
  }

  @Get('top-loser')
  topLoserCryptos() {
    return this.masterService.topLoserCryptos();
  }

  @Get('top-currency-token/:category_code')
  topDigitalCurrencyToken(@Param('category_code') category_code: number) {
    return this.masterService.topDigitalCurrencyToken(category_code);
  }

  @Get('global-search/:search_str/:search_state')
  globalSearch(@Param() globalSearchDto: GlobalSearchDto) {
    return this.masterService.globalSearch(globalSearchDto);
  }

  @Get('categories')
  loadCategories() {
    return this.masterService.loadCategories();
  }
}
