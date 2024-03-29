import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.92.20',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'nestjs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatsModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule { }
