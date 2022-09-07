import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { User } from './entities/user.entity';
import { SignInDto } from './user_dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('/signup')
  signup(@Body() user: User) {
    return this.service.signup(user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('/signin')
  async signin(@Body() user: SignInDto) {
    return this.service.signin(user);
  }
}
