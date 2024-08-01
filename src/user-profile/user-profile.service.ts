import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user-profile.dto';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { user_profile } from 'src/drizzle/schema/schema';
import * as bcrypt from 'bcrypt';
import { and, eq, sql } from 'drizzle-orm';
import { ApiResponse } from 'src/utils/api-response/api-response';
import { HttpService } from '@nestjs/axios';
import { Cron } from '@nestjs/schedule';
import { CryptoDataService } from 'src/drizzle/crypto-data-database/drizzle.service';

@Injectable()
export class UserProfileService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly cryptoDataService: CryptoDataService,
    private readonly httpService: HttpService

  ) {}
  async register(createUserDto: CreateUserDto) {
    let userData = await this.drizzleService.db.query.user_profile.findFirst({
      columns: {
        first_name: true,
      },
      where: and(
        eq(user_profile.email_id, createUserDto.email_id),
        eq(user_profile.is_active, true),
      ),
    })
    
    if(userData){
      // await this.httpService.axiosRef.get(`https://catfact.ninja/fac`)
      throw new BadRequestException(`User already exists with email ${createUserDto.email_id}`)
    }

    createUserDto.password = await bcrypt.hash(createUserDto.password, 8)

    await this.drizzleService.db.insert(user_profile).values(createUserDto);

    return new ApiResponse(201, 'User registered successfully')
  }

  findAll() {
    return `This action returns all userProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userProfile`;
  }
  
  // @Cron('*/5 * * * * *')
  // handleCron() {
  //   console.log('Called when the current second is 45');
  // }


  async getUserProfile(user_id: string) {

    return await this.drizzleService.db.query.user_profile.findFirst({
        columns:{
            created_at: false,
            updated_at: false,
            is_active: false,
            password: false
        },
        where: and(
          eq(user_profile.user_id, user_id),
          eq(user_profile.is_active, true),
        ),
    })
}

  remove(id: number) {
    return `This action removes a #${id} userProfile`;
  }

  async cryptoData(){
    
    // let queryParams = new URLSearchParams({
    //   limit : '5000',
    //   start : '1'
    // })
    try {
      // const data = await this.httpService.axiosRef.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      //   params: {
      //     limit : 1,
      //     start : 1
      //   },
      //   headers: {
      //     'Accepts': 'application/json',
      //     'X-CMC_PRO_API_KEY': '6b6cd81c-992a-4d32-bb89-e932ed626441',
      //   },
      // })

      // let data = await this.httpService.axiosRef.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/historical', {
      //   params: {
      //     id: 1,
      //     time_start : '2021-06-01T00:00:00Z',
      //     time_end : '2021-06-02T00:00:00Z',
      //     interval: '5m'
      //   },
      //   headers: {
      //     'Accepts': 'application/json',
      //     'X-CMC_PRO_API_KEY': '6b6cd81c-992a-4d32-bb89-e932ed626441',
      //   },
      // })

      let data = await this.httpService.axiosRef.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/ohlcv/historical', {
        params: {
          id: 1,
          time_start : '2021-06-01T00:00:00Z',
          time_end : '2021-06-02T00:00:00Z',
          interval: '1h'
        },
        headers: {
          'Accepts': 'application/json',
          'X-CMC_PRO_API_KEY': '6b6cd81c-992a-4d32-bb89-e932ed626441',
        },
      })



      console.log(data.data, 'hi hello')

      return data.data
  
    } catch (error) {
      console.log(error,'error aya hai')
      
    }

// #   parameters = {
// #     'limit' : 5000,
// #     'start' : start
// #   }
// #   headers = {
// #     'Accepts': 'application/json',
// #     'X-CMC_PRO_API_KEY': '6b6cd81c-992a-4d32-bb89-e932ed626441',
// #   }
// `)

//Db qury example
await this?.cryptoDataService.db.execute(sql`select * from "0x" limit 5`);
    return 
  }
}
