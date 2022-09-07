import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private us: Repository<User>) {}
  async all() {
    return await this.us.find({
      select: {
        username: true,
        cats: true,
      },
      relations: {
        cats: true,
      },
    });
  }
}
