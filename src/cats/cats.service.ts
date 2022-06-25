import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './cats_dto/create_cat.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CatsService {
  constructor(private config: ConfigService) {}
  getCatList(): string {
    return this.config.get('DATABASE_URL');
  }

  createCat(cat: CreateCatDto) {
    return cat;
  }
}
