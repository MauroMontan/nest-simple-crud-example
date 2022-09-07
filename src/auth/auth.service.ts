import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash, verify } from 'argon2';
import { User } from './entities/user.entity';
import { SignInResponseDto } from './user_dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signup(user: User) {
    user.password = await hash(user.password);
    user.cats.forEach((cat) => {
      cat.id = user.id;
    });
    return this.userRepository.save(user);
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<SignInResponseDto> {
    const user = await this.userRepository.findOne({ where: { email: email } });

    if (user && (await verify(user.password, password))) {
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
