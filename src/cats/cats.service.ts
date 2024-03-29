import { Injectable } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './cats_dto/create_cat.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private userRepository: Repository<Cat>) {}

  getList(): Promise<Cat[]> {
    return this.userRepository.find({
      relations: {
        owner: true,
      },
      select: {
        owner: {
          email: true,
          username: true,
        },
      },
    });
  }

  create(cat: CreateCatDto) {
    return this.userRepository.save(cat);
  }
  getById(id: number): Promise<Cat> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  deleteOne(id: number) {
    return this.userRepository.delete(id);
  }

  updateOne(id: number, cat: UpdateCatDto) {
    return this.userRepository.update(id, cat);
  }
}
