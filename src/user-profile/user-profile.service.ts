import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user-profile.dto';
import { DrizzleService } from 'src/drizzle/database/drizzle.service';
import { user_profile } from 'src/drizzle/schema/schema';
import * as bcrypt from 'bcrypt';
import { and, eq } from 'drizzle-orm';
import { ApiResponse } from 'src/utils/api-response/api-response';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UserProfileService {
  constructor(
    private readonly drizzleService: DrizzleService,
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
}
