import { IsString, IsEmail } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsEmail()
  owner_email: string;
}
