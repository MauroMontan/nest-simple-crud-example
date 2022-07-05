import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { SignInDto } from './user_dto/signin.dto';
import { SignUpDto } from './user_dto/signup.dto';

@Injectable()
export class AuthService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  signup(user: SignUpDto) {
    return this.userRepository.save(user);
  }


  signin(user: SignInDto): Promise<User> {
    return this.userRepository.findOne({ where: { email: user.email } });
  }

}
