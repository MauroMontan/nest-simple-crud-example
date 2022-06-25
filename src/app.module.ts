import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
