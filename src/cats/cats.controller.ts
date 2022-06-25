import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './cats_dto/create_cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private service: CatsService) {}
  @Get()
  catList() {
    return this.service.getCatList();
  }

  @Post()
  createCat(@Body() cat: CreateCatDto) {
    return this.service.createCat(cat);
  }
}
