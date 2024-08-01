import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class BitcoinConverterDto {

  @ApiProperty()
  @IsNotEmpty()
  coin_amount: string;


  @ApiProperty()
  @IsNotEmpty()
  currency_amount: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  currency_type: string;

}
