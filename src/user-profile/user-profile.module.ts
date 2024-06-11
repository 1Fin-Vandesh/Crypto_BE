import { Module } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileController } from './user-profile.controller';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [UserProfileController],
  providers: [UserProfileService, DrizzleService],
})
export class UserProfileModule {}
