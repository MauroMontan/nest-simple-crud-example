import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private service: CatsService) {}
  @Get()
  catList() {
    return this.service.getCatList();
  }
}
