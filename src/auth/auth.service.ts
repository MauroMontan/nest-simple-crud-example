import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './user_dto/create_user.dto';

@Injectable()
export class AuthService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  signup(user: CreateUserDto) {
    return this.userRepository.save(user);
  }

  signin() { }

}
