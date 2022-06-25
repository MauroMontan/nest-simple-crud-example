import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './cats_dto/create_cat.dto';

@Injectable()
export class CatsService {
  getCatList(): string {
    return 'cat list';
  }

  createCat(cat: CreateCatDto) {
    return cat;
  }
}
