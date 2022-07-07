import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { SignInDto, SignInResponseDto } from './user_dto/signin.dto';
import { SignUpDto } from './user_dto/signup.dto';

@Injectable()
export class AuthService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  signup(user: SignUpDto) {
    return this.userRepository.save(user);
  }


  async signin(current_user: SignInDto): Promise<SignInResponseDto> {

    const user = await this.userRepository.findOne({ where: { email: current_user.email } });

    if (current_user && current_user.password === user.password) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

}
