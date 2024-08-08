import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator";

class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    last_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail({
        
    })
    email_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    password: string;
}

type SortOrder = 'asc' | 'desc';

class SortingDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    market_cap_order: SortOrder;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    "24h_change_order": SortOrder;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    "7D_change_order": SortOrder;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    "1M_change_order": SortOrder;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    "1Y_change_order": SortOrder;
}


export { CreateUserDto, SortingDto };
