import { Expose } from 'class-transformer';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
