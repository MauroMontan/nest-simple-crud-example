import { IsString, IsEmail } from 'class-validator';

class CreateCatDto {
  @IsString()
  name: string;
  @IsEmail()
  owner_email: string;
}
