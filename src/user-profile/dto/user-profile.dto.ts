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

export { CreateUserDto };
