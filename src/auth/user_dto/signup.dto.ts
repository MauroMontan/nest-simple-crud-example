import { IsString, IsEmail } from 'class-validator';

export class SignUpDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
