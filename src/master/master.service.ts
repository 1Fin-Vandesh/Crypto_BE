import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { sql } from 'drizzle-orm';
@Injectable()
export class MasterService { 

  constructor(
    private readonly drizzleService: DrizzleService,
    // private readonly cryptoDataService: CryptoDataService,
    private readonly httpService: HttpService
  ) {}


  create(createMasterDto: CreateMasterDto) {
    return 'This action adds a new master';
  }

  // findAll() { 
  //   return `This action returns all master`;
  // }

  async findAll(){
    console.log('Hi..');
  let data=  await this?.drizzleService.db.execute(sql`select * from "crypto_master" limit 5`);
  // let data="Rahul";
  console.log('data',data);
  return data
  }


  findOne(id: number) {
    return `This action returns a #${id} master`;
  }

  update(id: number, updateMasterDto: UpdateMasterDto) {
    return `This action updates a #${id} master`;
  }

  remove(id: number) {
    return `This action removes a #${id} master`;
  }
}
