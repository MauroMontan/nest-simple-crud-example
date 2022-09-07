import { IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsEmail()
  owner_email: string;
  @IsNumber()
  userId: number;
}

export class UpdateCatDto {
  @IsString()
  name: string;
  @IsEmail()
  owner_email: string;

  @IsNumber()
  userId: number;
}
