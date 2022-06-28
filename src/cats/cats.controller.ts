import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto } from './cats_dto/create_cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private service: CatsService) {}

  @Get()
  catList() {
    return this.service.getList();
  }

  @Post()
  createCat(@Body() cat: CreateCatDto) {
    return this.service.create(cat);
  }
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.service.getById(id);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteOne(id);
  }

  @Patch(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() cat: UpdateCatDto) {
    return this.service.updateOne(id, cat);
  }
}
