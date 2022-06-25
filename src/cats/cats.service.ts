import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCatList(): string {
    return 'cat list';
  }
}
