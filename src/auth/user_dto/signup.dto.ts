import { IsString, IsEmail } from 'class-validator';
import { Cat } from 'src/cats/entities/cat.entity';
import { OneToOne } from 'typeorm';

export class SignUpDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @OneToOne(() => Cat)
  cats: Cat[];
}
