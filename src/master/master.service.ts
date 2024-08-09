import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { and, asc, desc, sql } from 'drizzle-orm';
import { _crypto_master } from 'src/drizzle/migrations/schema';
import { eq } from 'drizzle-orm';
import { ApiResponse } from 'src/utils/api-response/api-response';
import * as schema from 'src/drizzle/migrations/schema';
import { GlobalSearchDto } from './dto/global_search.dto';
import { CryptoDataService } from 'src/drizzle/crypto-data-database/drizzle.service';

@Injectable()
export class MasterService {
  constructor(
    private readonly conn: CryptoDataService,
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

  //Akshay: Getting trending crypto
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

  //Akshay: Top gainer Cryptos
  async topGainerCryptos() {
    // Execute both queries in parallel
    const top_gainer = await this.conn.db
      .select({
        id: schema._crypto_master.id,
        cmc_id: schema._crypto_master.cmc_id,
        symbol: schema._crypto_master.symbol,
        name: schema._crypto_master.name,
        price: schema._crypto_master.updated_price,
        slug: schema._crypto_master.slug,
        percent_change_24h: schema._crypto_master.percent_change_24h,
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

      // Add top gainer with related data to results
      results.push({
        top_gainer: gainer,
        graph_value: coinData,
      });
    }

    return new ApiResponse(200, 'Success', results);
  }

  //Akshay: Top Loser Cryptos
  async topLoserCryptos() {
    const top_loser = await this.conn.db
      .select({
        id: schema._crypto_master.id,
        cmc_id: schema._crypto_master.cmc_id,
        symbol: schema._crypto_master.symbol,
        name: schema._crypto_master.name,
        price: schema._crypto_master.updated_price,
        slug: schema._crypto_master.slug,
        percent_change_24h: schema._crypto_master.percent_change_24h,
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

      // Add top gainer with related data to results
      results.push({
        top_loser: loser,
        graph_value: coinData,
      });
    }

    return new ApiResponse(200, 'Success', results);
  }

  //Akshay: Global search
  async globalSearch(globalSearchDto: GlobalSearchDto) {
    switch (globalSearchDto.search_state) {
      case 'All':
        // Run both queries concurrently
        const [cryptoData] = await Promise.all([
          this.conn.db
            .select({
              name: schema._crypto_master.name,
              cmc_id: schema._crypto_master.cmc_id,
              symbol: schema._crypto_master.symbol,
              price: schema._crypto_master.updated_price,
            })
            .from(schema._crypto_master)
            .where(
              and(
                sql`${schema._crypto_master.name} ILIKE ${sql.raw(`'%${globalSearchDto.search_str}%'`)}`,
                eq(schema._crypto_master.is_active, true),
              ),
            )
            .limit(3),
        ]);

        return new ApiResponse(200, 'Success', {
          crypto: cryptoData,
        });

      case 'Crypto':
        const crypto = await this.conn.db
          .select({
            name: schema._crypto_master.name,
            cmc_id: schema._crypto_master.cmc_id,
            symbol: schema._crypto_master.symbol,
            price: schema._crypto_master.updated_price,
          })
          .from(schema._crypto_master)
          .where(
            and(
              sql`${schema._crypto_master.name} ILIKE ${sql.raw(`'%${globalSearchDto.search_str}%'`)}`,
              eq(schema._crypto_master.is_active, true),
            ),
          )
          .limit(3);
        return new ApiResponse(200, 'Success', { crypto });

      case 'Blogs':
      case 'News':
      case 'Modules':

      default:
        throw new BadRequestException('Invalid Search State');
    }
  }

  //Akshay: Load categories
  async loadCategories() {
    const categories = await this.conn.db
      .select({
        id: schema.crypto_categories.id,
        code: schema.crypto_categories.code,
        name: schema.crypto_categories.name,
      })
      .from(schema.crypto_categories)
      .where(eq(schema.crypto_categories.status_code, 1));

    return new ApiResponse(200, 'Success', { categories });
  }

  //Top 3 digital currency token based on ICR score
  async topDigitalCurrencyToken(category_code: number) {
    const top_currency_token = await this.conn.db
      .select({
        id: schema._crypto_master.id,
        cmc_id: schema._crypto_master.cmc_id,
        symbol: schema._crypto_master.symbol,
        name: schema._crypto_master.name,
        icr_score: schema._crypto_master.icr_score,
      })
      .from(schema._crypto_master)
      .where(eq(schema._crypto_master.category_code, category_code))
      .orderBy(desc(schema._crypto_master.icr_score))
      .limit(3);

    return new ApiResponse(200, 'Success', { top_currency_token });
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

  update(id: number, updateMasterDto: UpdateMasterDto) {
    return `This action updates a #${id} master`;
  }

  remove(id: number) {
    return `This action removes a #${id} master`;
  }
}
