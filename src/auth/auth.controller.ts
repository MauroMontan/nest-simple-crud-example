import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './user_dto/create_user.dto';

@Controller('auth')
export class AuthController {

  constructor(private service: AuthService) { }

  @Post('/signup')
  signup(@Body() user: CreateUserDto) {
    return this.service.signup(user);
  }

  @Post('/signin')
  signin() { }

}
