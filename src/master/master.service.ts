import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { asc, desc, sql } from 'drizzle-orm';
import { _crypto_master } from 'src/drizzle/migrations/schema';
import { eq } from 'drizzle-orm';
import { ApiResponse } from 'src/utils/api-response/api-response';
import * as schema from 'src/drizzle/migrations/schema';
import { GlobalSearchDto } from './dto/global_search.dto';

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
          id: schema._crypto_master.id,
          cmc_id: schema._crypto_master.cmc_id,
          title: schema._crypto_master.symbol,
          price: schema._crypto_master.updated_price, ///TODO price column name change
        })
        .from(schema._crypto_master)
        .orderBy(desc(schema._crypto_master.search_count))
        .limit(3);

      return new ApiResponse(200, 'Success', response);
    } catch (e) {
      throw new BadRequestException('Bad Request');
    }
  }

  //Top gainer Cryptos
  async topGainerCryptos() {
    try {
      // Execute both queries in parallel
      const top_gainer = await this.conn.db
        .select({
          id: schema._crypto_master.id,
          cmc_id: schema._crypto_master.cmc_id,
          symbol: schema._crypto_master.symbol,
          name: schema._crypto_master.name,
          price: schema._crypto_master.updated_price,
          slug: schema._crypto_master.slug,
          percent_change_24h: schema._crypto_master.updated_price, //TODO: update coloum name
        })
        .from(schema._crypto_master)
        .where(eq(schema._crypto_master.is_active, true))
        .orderBy(desc(schema._crypto_master.updated_price))
        .limit(3);

      const results = [];

      for (const gainer of top_gainer) {
        const { slug } = gainer;

        const tableName = slug.replaceAll('-', '_');

        // Execute the query
        const coinData = await this?.conn.db.execute(
          sql`SELECT volume,price,time_interval,percent_change_24h FROM "${sql.raw(tableName)}" ORDER BY time_interval DESC limit 288`,
        );

        const gainerChange = {
          ...gainer,
          percent_change_24h: coinData[0].percent_change_24h,
        };

        // Add top gainer with related data to results
        results.push({
          top_gainer: gainerChange,
          graph_value: coinData,
        });
      }

      return new ApiResponse(200, 'Success', results);
    } catch (e) {
      throw new BadRequestException('Bad Request');
    }
  }

  //Top Loser Cryptos
  async topLoserCryptos() {
    try {
      // Execute both queries in parallel
      const top_loser = await this.conn.db
        .select({
          id: schema._crypto_master.id,
          cmc_id: schema._crypto_master.cmc_id,
          symbol: schema._crypto_master.symbol,
          name: schema._crypto_master.name,
          price: schema._crypto_master.updated_price,
          slug: schema._crypto_master.slug,
          percent_change_24h: schema._crypto_master.updated_price, //TODO: update coloum name
        })
        .from(schema._crypto_master)
        .where(eq(schema._crypto_master.is_active, true))
        .orderBy(asc(schema._crypto_master.updated_price))
        .limit(3);

      const results = [];

      for (const loser of top_loser) {
        const { slug } = loser;

        const tableName = slug.replaceAll('-', '_');

        // Execute the query
        const coinData = await this?.conn.db.execute(
          sql`SELECT volume,price,time_interval,percent_change_24h FROM "${sql.raw(tableName)}" ORDER BY time_interval DESC limit 288`,
        );

        const loserChange = {
          ...loser,
          percent_change_24h: coinData[0].percent_change_24h,
        };

        // Add top gainer with related data to results
        results.push({
          top_loser: loserChange,
          graph_value: coinData,
        });
      }

      return new ApiResponse(200, 'Success', results);
    } catch (e) {
      throw new BadRequestException('Bad Request');
    }
  }

  //Top 3 digital currency token based on ICR score
  async topDigitalCurrencyToken() {
    try {
      const top_currency_token = await this.conn.db
        .select({
          id: schema._crypto_master.id,
          cmc_id: schema._crypto_master.cmc_id,
          symbol: schema._crypto_master.symbol,
          name: schema._crypto_master.name,
          icr_score: schema._crypto_master.icr_score,
        })
        .from(schema._crypto_master)
        .orderBy(desc(schema._crypto_master.icr_score))
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
      .from(_crypto_master)
      .where(eq(_crypto_master.cmc_id, id));

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

  //global search
  async globalSearch(globalSearchDto: GlobalSearchDto) {
    switch (globalSearchDto.search_state) {
      case 'All':
      // return this.allDataRepository.find({
      //   where: { search_field: search_str }, // Replace search_field with the actual field name
      // });

      case 'Crypto':
        const crypto = await this.conn.db
          .select({ name: schema._crypto_master.name })
          .from(schema._crypto_master)
          .where(
            sql`${schema._crypto_master.name} ILIKE ${sql.raw(`'%${globalSearchDto.search_str}%'`)}`,
          );
        return new ApiResponse(200, 'Success', { crypto });

      case 'Blogs':
      case 'News':
      case 'Modules':

      default:
        throw new BadRequestException('Invalid Search State');
    }
  }

  update(id: number, updateMasterDto: UpdateMasterDto) {
    return `This action updates a #${id} master`;
  }

  remove(id: number) {
    return `This action removes a #${id} master`;
  }
}
