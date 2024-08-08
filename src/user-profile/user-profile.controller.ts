import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { CreateUserDto, SortingDto } from './dto/user-profile.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
// import { UpdateUserProfileDto } from './dto/update-user-profile.dto';

@ApiTags('User Profile')
@Controller('user-profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Post('register-user')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userProfileService.register(createUserDto);
  }

  // @Get()
  // findAll() {
  //   return this.userProfileService.findAll();
  // }

  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  @Get('profile')
  async getUserProfile(@Request() req) {
      return await this.userProfileService.getUserProfile(req.user.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProfileService.remove(+id);
  }

  @Get('crypto-data-example')
  async cryptoData() {
      return await this.userProfileService.cryptoData();
  }

  @Get('listing-example')
  async getListing(sortingDto: SortingDto) {
    return await this.userProfileService.getListing(sortingDto);
  }

}
