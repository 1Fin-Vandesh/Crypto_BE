import { Module } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileController } from './user-profile.controller';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { HttpModule } from '@nestjs/axios';
import { CryptoDataService } from 'src/drizzle/crypto-data-database/drizzle.service';

@Module({
  imports: [HttpModule],
  controllers: [UserProfileController],
  providers: [UserProfileService, DrizzleService, CryptoDataService],
})
export class UserProfileModule {}
