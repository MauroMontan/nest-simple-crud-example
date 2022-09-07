import { IsString, IsEmail, IsArray } from 'class-validator';
import { Cat } from 'src/cats/entities/cat.entity';

export class SignUpDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  cats: Array<Cat>;
}
