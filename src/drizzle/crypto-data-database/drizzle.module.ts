import { Global, Module } from "@nestjs/common";
import { CryptoDataService } from "./drizzle.service";
@Global()
@Module({
    providers: [CryptoDataService],
    exports: [CryptoDataService],
})
export class CryptoDataModule {}
  