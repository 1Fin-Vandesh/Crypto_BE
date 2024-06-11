import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { CreateUserDto } from './dto/user-profile.dto';
import { ApiTags } from '@nestjs/swagger';
// import { UpdateUserProfileDto } from './dto/update-user-profile.dto';

@ApiTags('User Profile')
@Controller('user-profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Post('register-user')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userProfileService.register(createUserDto);
  }

  @Get()
  findAll() {
    return this.userProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProfileService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserProfileDto: UpdateUserProfileDto) {
  //   return this.userProfileService.update(+id, updateUserProfileDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProfileService.remove(+id);
  }
}
