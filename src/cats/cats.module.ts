import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';

@Module({
  providers: [CatsService, JwtStrategy],
  controllers: [CatsController],
  imports: [TypeOrmModule.forFeature([Cat])],
})
export class CatsModule {}
