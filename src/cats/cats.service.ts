import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './cats_dto/create_cat.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private userRepository: Repository<Cat>) {}
  getCatList(): Promise<Cat[]> {
    return this.userRepository.find();
  }

  createCat(cat: CreateCatDto) {
    return 'cat';
  }
}
