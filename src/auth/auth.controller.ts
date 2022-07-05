import { Controller, Post, Body } from '@nestjs/common';
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

  @Post('/signin')
  signin(@Body() user: SignInDto) {

    return this.service.signin(user);

  }

}
