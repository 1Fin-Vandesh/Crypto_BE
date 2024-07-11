import { DrizzleService } from "src/drizzle/database/drizzle.service";
import { AuthService } from "./auth.service";
import { Post, UseGuards, Request, Body, Get, Param, Controller } from "@nestjs/common";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { JwtGuard } from "./guards/jwt-auth.guard";
import { RefreshJwtGuard } from "./guards/refresh-jwt-auth.guard";
import { LoginDto,refreshToken } from "./dto/auth.dto";
import { ApiBearerAuth, ApiBody, ApiHeader, ApiTags } from "@nestjs/swagger";


// const type CreateUserDto{

// }
@ApiTags('Authorization')
@Controller('/auth')
export class AuthController {
    constructor (
        private readonly authService: AuthService,
        private readonly drizzleService: DrizzleService
    ){}

    @UseGuards(LocalAuthGuard)
    @ApiBody({ type: LoginDto })
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }


    @UseGuards(RefreshJwtGuard)
    @ApiHeader({ name: 'refresh_token', description: 'Refresh Token' })
    // @ApiBody({ type: refreshToken })
    @Get('refresh')
    async refresh(@Request() req) {
        return this.authService.refreshToken(req.user);
    }

    // @UseGuards(JwtGuard)
    // @ApiBearerAuth()
    // @Get(':id/profile')
    // async getUserProfile(@Param('id') user_id: string, @Request() req) {
    //     return await this.authService.getUserProfile(user_id);
    // }

}

