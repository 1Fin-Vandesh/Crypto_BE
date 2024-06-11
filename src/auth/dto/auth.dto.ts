import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty()
    email_id: string;

    @ApiProperty()
    password: string;
}

export class refreshToken{
    @ApiProperty()
    refreshToken: string
}
