import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, SortingDto } from './dto/user-profile.dto';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { user_profile } from 'src/drizzle/schema/schema';
import * as bcrypt from 'bcrypt';
import { and, eq, inArray, sql } from 'drizzle-orm';
import { ApiResponse } from 'src/utils/api-response/api-response';
import { HttpService } from '@nestjs/axios';
import { Cron } from '@nestjs/schedule';
import { CryptoDataService } from 'src/drizzle/crypto-data-database/drizzle.service';
import * as schema from 'src/drizzle/migrations/schema';
import{
  _crypto_master,
} from 'src/drizzle/migrations/schema';
import path from 'path';
import fs from 'fs';

@Injectable()
export class UserProfileService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly cryptoDataService: CryptoDataService,
    private readonly httpService: HttpService

  ) {}

  chunkSize = 1000

  async chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

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
    // try {
      // const data = await this.httpService.axiosRef.get('process.env.COIN_MARKET_CAP_HOST/v1/cryptocurrency/listings/latest', {
      //   params: {
      //     limit : 1,
      //     start : 1
      //   },
      //   headers: {
      //     'Accepts': 'application/json',
      //     'X-CMC_PRO_API_KEY': 'process.env.COIN_MARKET_CAP_API_KEY',
      //   },
      // })

      // let data = await this.httpService.axiosRef.get('process.env.COIN_MARKET_CAP_HOST/v1/cryptocurrency/quotes/historical', {
      //   params: {
      //     id: 1,
      //     time_start : '2021-06-01T00:00:00Z',
      //     time_end : '2021-06-02T00:00:00Z',
      //     interval: '5m'
      //   },
      //   headers: {
      //     'Accepts': 'application/json',
      //     'X-CMC_PRO_API_KEY': 'process.env.COIN_MARKET_CAP_API_KEY',
      //   },
      // })

      // let data = await this.httpService.axiosRef.get('process.env.COIN_MARKET_CAP_HOST/v1/cryptocurrency/ohlcv/historical', {
      //   params: {
      //     id: 1,
      //     time_start : '2021-06-01T00:00:00Z',
      //     time_end : '2021-06-02T00:00:00Z',
      //     interval: '1h'
      //   },
      //   headers: {
      //     'Accepts': 'application/json',
      //     'X-CMC_PRO_API_KEY': 'process.env.COIN_MARKET_CAP_API_KEY',
      //   },
      // })



    //   console.log(data.data, 'hi hello')

    //   return data.data
  
    // } catch (error) {
    //   console.log(error,'error aya hai')
      
    // }

// #   parameters = {
// #     'limit' : 5000,
// #     'start' : start
// #   }
// #   headers = {
// #     'Accepts': 'application/json',
// #     'X-CMC_PRO_API_KEY': '',
// #   }
// `)

  // Db qury example
  // await this?.cryptoDataService.db.execute(sql`select * from "0x" limit 5`);
  // return 


// const tokensList = [
//   "0x - 1896 - 0x Protocol",
//   "1inch - 8104 - 1inch Network",
//   "constitutiondao - 14806 - ConstitutionDAO",
//   "aave - 7278 - Aave",
//   "algorand - 4030 - Algorand",
//   "amp - 6945 - Amp",
//   "ankr - 3783 - Ankr",
//   "api3 - 7737 - API3",
//   "aptos - 21794 - Aptos",
//   "arbitrum - 11841 - Arbitrum",
//   "arweave - 5632 - Arweave",
//   "avalanche - 5805 - Avalanche",
//   "axie-infinity - 6783 - Axie Infinity",
//   "balancer - 5728 - Balancer",
//   "band-protocol - 4679 - Band Protocol",
//   "basic-attention-token - 1697 - Basic Attention Token",
//   "beam - 3702 - Beam",
//   "biconomy - 9543 - Biconomy",
//   "bitcoin-cash - 1831 - Bitcoin Cash",
//   "bitcoin - 1 - Bitcoin",
//   "bittorrent - 3718 - BitTorrent",
//   "cardano - 2010 - Cardano",
//   "cartesi - 5444 - Cartesi",
//   "celestia - 22861 - Celestia",
//   "celo - 5567 - Celo",
//   "chainlink - 1975 - Chainlink",
//   "chiliz - 4066 - Chiliz",
//   "chromia - 3978 - Chromia",
//   "coin98 - 10903 - Coin98",
//   "compound - 5692 - Compound",
//   "conflux-network - 7334 - Conflux",
//   "convex-finance - 9903 - Convex Finance",
//   "cosmos - 3794 - Cosmos",
//   "dash - 131 - Dash",
//   "decentraland - 1966 - Decentraland",
//   "decred - 1168 - Decred",
//   "dexe - 7326 - DeXe",
//   "dogecoin - 74 - Dogecoin",
//   "eos - 1765 - EOS",
//   "ethereum-classic - 1321 - Ethereum Classic",
//   "ethereum - 1027 - Ethereum",
//   "fantom - 3513 - Fantom",
//   "filecoin - 2280 - Filecoin",
//   "first-digital-usd - 26081 - First Digital USD",
//   "flow - 4558 - Flow",
//   "frax-share - 6953 - Frax Share",
//   "gains-network - 13663 - Gains Network",
//   "gala - 7080 - Gala",
//   "gmx - 11857 - GMX",
//   "harmony - 3945 - Harmony",
//   "icon - 2099 - ICON",
//   "illuvium - 8719 - Illuvium",
//   "immutable-x - 10603 - Immutable",
//   "internet-computer - 8916 - Internet Computer",
//   "iota - 1720 - IOTA",
//   "iotex - 2777 - IoTeX",
//   "jasmy - 8425 - JasmyCoin",
//   "just - 5488 - JUST",
//   "kadena - 5647 - Kadena",
//   "kava - 4846 - Kava",
//   "klaytn - 4256 - Klaytn",
//   "kusama - 5034 - Kusama",
//   "lido-dao - 8000 - Lido DAO",
//   "litecoin - 2 - Litecoin",
//   "livepeer - 3640 - Livepeer",
//   "loopring - 1934 - Loopring",
//   "magic - 13037 - Cosmic Universe Magick",
//   "maker - 1518 - Maker",
//   "mina - 8646 - Mina",
//   "monero - 328 - Monero",
//   "moonbeam - 6836 - Moonbeam",
//   "moonriver - 9285 - Moonriver",
//   "nano - 1567 - Nano",
//   "near-protocol - 6535 - NEAR Protocol",
//   "neo - 1376 - Neo",
//   "nexo - 2694 - Nexo",
//   "ocean-protocol - 3911 - Ocean Protocol",
//   "ontology - 2566 - Ontology",
//   "open-campus - 24613 - Open Campus",
//   "ordi - 25028 - ORDI",
//   "osmosis - 12220 - Osmosis",
//   "pax-gold - 4705 - PAX Gold",
//   "pendle - 9481 - Pendle",
//   "polygon - 3890 - Polygon",
//   "polymesh - 20362 - Polymesh",
//   "power-ledger - 2132 - Powerledger",
//   "qtum - 1684 - Qtum",
//   "raydium - 8526 - Raydium",
//   "render - 5690 - Render",
//   "rocket-pool - 2943 - Rocket Pool",
//   "safepal - 8119 - SafePal",
//   "sei - 23149 - Sei",
//   "shiba-inu - 5994 - Shiba Inu",
//   "siacoin - 1042 - Siacoin",
//   "singularitynet - 2424 - SingularityNET",
//   "solana - 5426 - Solana",
//   "ssv-network - 12999 - ssv.network",
//   "stacks - 4847 - Stacks",
//   "status - 1759 - Status",
//   "stellar - 512 - Stellar",
//   "storj - 1772 - Storj",
//   "stratis - 1343 - Stratis [Old]",
//   "sui - 20947 - Sui",
//   "sushiswap - 6758 - SushiSwap",
//   "synthetix - 2586 - Synthetix",
//   "tellor - 4944 - Tellor",
//   "terrausd - 7129 - TerraClassicUSD",
//   "tether - 825 - Tether USDt",
//   "tezos - 2011 - Tezos",
//   "the-graph - 6719 - The Graph",
//   "theta-fuel - 3822 - Theta Fuel",
//   "thorchain - 4157 - THORChain",
//   "tron - 1958 - TRON",
//   "trueusd - 2563 - TrueUSD",
//   "uma - 5617 - UMA",
//   "uniswap - 7083 - Uniswap",
//   "vechain - 3077 - VeChain",
//   "venus - 7288 - Venus",
//   "waves - 1274 - Waves",
//   "wax - 2300 - WAX",
//   "worldcoin - 16 - WorldCoin WDC",
//   "wrapped-bitcoin - 3717 - Wrapped Bitcoin",
//   "xrp - 52 - XRP",
//   "zcash - 1437 - Zcash",
//   "zilliqa - 2469 - Zilliqa"
// ];

// Extract only the cmc_id values
// const cmc_ids = tokensList.map(token => {
//   const parts = token.split(' - ');
//   return parts[1]; // Extract the middle part (cmc_id)
// });

    const DirectoryJson = fs.readdirSync('D:\\node-crypto-data\\pervious-3-month-data\\july');

    const data = await this.cryptoDataService.db.execute(sql`select * from "01_crypto_currency_master" where is_active = true`);

    let counter = 0;

    DirectoryJson.forEach(async (jsonFile, i) => {

      let current_id = jsonFile.replace('-july.json', '');

      let userData: any = data.find(data => data.cmc_id == current_id)

      // console.log(jsonFile, 'userData')
      const filePath = path.join("D:\\node-crypto-data\\pervious-3-month-data\\july", jsonFile);
      const fileContent = await fs.promises.readFile(filePath, 'utf8');
      const jsonData = JSON.parse(fileContent);  

      const quotes = jsonData.data.quotes.map((quote: any) => ({
        time_interval: quote.timestamp,
        percent_change_1h: quote.quote.USD.percent_change_1h,
        percent_change_24h: quote.quote.USD.percent_change_24h,
        percent_change_7d: quote.quote.USD.percent_change_7d,
        percent_change_30d: quote.quote.USD.percent_change_30d,
        price: quote.quote.USD.price,
        volume_24h: quote.quote.USD.volume_24h,
        market_cap: quote.quote.USD.market_cap,
        total_supply: quote.quote.USD.total_supply,
        circulating_supply: quote.quote.USD.circulating_supply,
      }));

      const quoteChunks = await this.chunkArray(quotes, 1000);
          
      for (const chunk of quoteChunks) {

        let tableName:any = userData.slug.replaceAll('-','_')

        try {
          await this.cryptoDataService.db.insert(schema?.[`${tableName}`]).values(chunk);

        } catch(e){

          let errorMessage = `${userData.slug} ${userData.cmc_id}`

          let  errorLogFilePath = path.join('D:\\node-crypto-data\\pervious-3-month-data\\error.log');

          fs.appendFile(errorLogFilePath, errorMessage + '\n', (err) => {
            if (err) {
                console.error('Failed to write to log file:', err);
            }
          });

        }
      }

      console.log(++counter, 'counter', userData.slug)

    })
    return "Data Inserted Successfuly"

 }
  async getListing(sortingDto: SortingDto) {

    const cryptoMaster = await this.cryptoDataService.db.query._crypto_master.findMany({
      where: eq(_crypto_master?.is_active, true)
    })

    let dataQuery = []
    let tableName = cryptoMaster.forEach((data, i) => {

      // dataQuery.push()
    })

    console.log(cryptoMaster, 'cryptoMaster')

    return await this.cryptoDataService.db.execute(sql`select * from "0x" limit 5`);
  }
}
