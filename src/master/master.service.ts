import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { asc, desc, sql } from 'drizzle-orm';
import { crypto_master } from 'src/drizzle/migrations/schema';
import { eq } from 'drizzle-orm';
import { ApiResponse } from 'src/utils/api-response/api-response';
import * as schema from 'src/drizzle/migrations/schema';
import { TopGainerLoserWebsocketGateWay } from './gateway/top_gainer_loser_websocket.gateway';

@Injectable()
export class MasterService {
  constructor(
    private readonly conn: DrizzleService,
    // private readonly cryptoDataService: CryptoDataService,
    private readonly httpService: HttpService,
  ) {}

  create(createMasterDto: CreateMasterDto) {
    return 'This action adds a new master';
  }

  // findAll() {
  //   return `This action returns all master`;
  // }

  async findAll() {
    // let data=  await this?.conn.db.execute(sql`select * from public.fn_get_search_crypto('eth')`);
    // let res={
    //    statusCode:200,
    //    message:"success",
    //    data:data
    // }
    // return res
  }

  //Getting trending crypto
  async getTrendingCrypto() {
    try {
      const response = await this.conn.db
        .select({
          id: schema.crypto_master.id,
          cmc_id: schema.crypto_master.cmc_id,
          title: schema.crypto_master.symbol,
          price: schema.crypto_master.updated_price, ///TODO price column name change
        })
        .from(schema.crypto_master)
        .orderBy(desc(schema.crypto_master.search_count))
        .limit(3);

      return new ApiResponse(200, 'Success', response);
    } catch (e) {
      throw new BadRequestException('Bad Request');
    }
  }

  //Top gainer and top loser
  async topGainerAndLoser() {
    try {
      // Execute both queries in parallel
      const [top_gainer, top_loser] = await Promise.all([
        this.conn.db
          .select({
            id: schema.crypto_master.id,
            cmc_id: schema.crypto_master.cmc_id,
            symbol: schema.crypto_master.symbol,
            name: schema.crypto_master.name,
            price: schema.crypto_master.updated_price,
          })
          .from(schema.crypto_master)
          .orderBy(desc(schema.crypto_master.updated_price))
          .limit(3),

        this.conn.db
          .select({
            id: schema.crypto_master.id,
            cmc_id: schema.crypto_master.cmc_id,
            symbol: schema.crypto_master.symbol,
            name: schema.crypto_master.name,
            price: schema.crypto_master.updated_price,
          })
          .from(schema.crypto_master)
          .orderBy(asc(schema.crypto_master.updated_price))
          .limit(3),
      ]);

      return new ApiResponse(200, 'Success', { top_gainer, top_loser });
    } catch (e) {
      throw new BadRequestException('Bad Request');
    }
  }

  //Top 3 digital currency token based on ICR score
  async topDigitalCurrencyToken() {
    try {
      const top_currency_token = await this.conn.db
        .select({
          id: schema.crypto_master.id,
          cmc_id: schema.crypto_master.cmc_id,
          symbol: schema.crypto_master.symbol,
          name: schema.crypto_master.name,
          icr_score: schema.crypto_master.icr_score,
        })
        .from(schema.crypto_master)
        .orderBy(desc(schema.crypto_master.icr_score))
        .limit(3);

      return new ApiResponse(200, 'Success', { top_currency_token });
    } catch (e) {
      throw new BadRequestException('Bad Request');
    }
  }

  async findCryptoCoins(str: string) {
    let res = {
      statusCode: 200,
      message: 'success',
      data: [],
    };

    let data = await this?.conn.db.execute(
      sql`select * from public.fn_get_search_crypto(${str})`,
    );

    if (data.length > 0) {
      res.data = data;
    } else {
      res.message = 'Data not found';
      res.statusCode = 404;
    }
    return res;
  }

  async findOne(id: number) {
    let res = {
      statusCode: 200,
      message: 'success',
      data: null,
    };

    // input value validation to be added;

    let data = await this.conn.db
      .select()
      .from(crypto_master)
      .where(eq(crypto_master.cmc_id, id));

    if (data.length > 0) {
      data = await this?.conn.db.execute(
        sql`select * from public.fn_update_search_count(${id})`,
      );
    } else {
      res.statusCode = 404;
      res.message = 'data not found';
      data = data;
    }
    res.data = data;
    return res;
  }

  update(id: number, updateMasterDto: UpdateMasterDto) {
    return `This action updates a #${id} master`;
  }

  remove(id: number) {
    return `This action removes a #${id} master`;
  }
}
