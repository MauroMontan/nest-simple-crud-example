import { IsString, IsEmail } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class SignInResponseDto {
  @IsEmail()
  email: string;
}
