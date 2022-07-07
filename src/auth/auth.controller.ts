import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignInDto } from './user_dto/signin.dto';
import { SignUpDto } from './user_dto/signup.dto';


@Controller('auth')
export class AuthController {

  constructor(private service: AuthService) { }

  @Post('/signup')
  signup(@Body() user: SignUpDto) {
    return this.service.signup(user);
  }


  @UseGuards(AuthGuard("local"))
  @Post('/signin')
  async signin(@Body() user: SignInDto) {
    return user;
  }

}
