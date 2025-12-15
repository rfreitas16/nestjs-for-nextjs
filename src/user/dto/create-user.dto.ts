import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Nome precisa ser uma string' })
  @IsNotEmpty({ message: 'Nome nao pode estar vazia' })
  name: string;
  @IsEmail({}, { message: 'Email invalido' })
  email: string;
  @IsString({ message: 'Senha precisa ser uma string' })
  @IsNotEmpty({ message: 'senha nao pode estar vazia' })
  password: string;
}
