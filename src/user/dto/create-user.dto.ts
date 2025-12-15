import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Nome precisa ser uma string' })
  @IsNotEmpty({ message: 'Nome nao pode estar vazia' })
  name: string;
  @IsEmail({}, { message: 'Email invalido' })
  email: string;
  @IsString({ message: 'Senha precisa ser uma string' })
  @IsNotEmpty({ message: 'senha nao pode estar vazia' })
  @MinLength(6, { message: 'A senha deve ter no minimo 6 caracteres' })
  password: string;
}
