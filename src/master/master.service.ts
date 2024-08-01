import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { sql } from 'drizzle-orm';
@Injectable()
export class MasterService { 

  constructor(
    private readonly conn: DrizzleService,
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
  // let data=  await this?.conn.db.execute(sql`select * from public.fn_get_search_crypto('eth')`);
  // let res={
  //    statusCode:200,
  //    message:"success",
  //    data:data
  // }
  // return res
  }

 async findCryptoCoins(str:string) {

  let res={
    statusCode:200,
    message:"success",
    data:[]
 }

  let data=  await this?.conn.db.execute(sql`select * from public.fn_get_search_crypto(${str})`);

  if(data.length>0) {
    res.data=data
  }else{
     res.message="Data not found";
     res.statusCode=404;
  }
    return res
  }

 async findOne(id: number) {

  let res={
    statusCode:200,
    message:"success",
    data:null
  }
 
  // input value validation to be added;

  let data= await this.conn.db.select().from(crypto_master).where(eq(crypto_master.cmc_id, id));

  if(data.length>0) {
   data= await this?.conn.db.execute(sql`select * from public.fn_update_search_count(${id})`);
  } else {
    res.statusCode=404;
    res.message="data not found";
    data=data
  }
  res.data=data
  return res;
  }

  update(id: number, updateMasterDto: UpdateMasterDto) {
    return `This action updates a #${id} master`;
  }

  remove(id: number) {
    return `This action removes a #${id} master`;
  }
}
