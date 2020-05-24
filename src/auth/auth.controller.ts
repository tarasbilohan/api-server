import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() loginUserDto: LoginUserDto, @Request() req) {
    return this.authService.login(req.user);
  }
}
