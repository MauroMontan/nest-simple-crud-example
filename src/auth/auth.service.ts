import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { SignInResponseDto } from './user_dto/signin.dto';
import { SignUpDto } from './user_dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  signup(user: SignUpDto) {
    return this.userRepository.save(user);
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<SignInResponseDto> {
    const user = await this.userRepository.findOne({ where: { email: email } });

    if (user && password === user.password) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async signin(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
