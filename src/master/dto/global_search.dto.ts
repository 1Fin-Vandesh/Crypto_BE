import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GlobalSearchDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  search_str: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  search_state: string;
}
