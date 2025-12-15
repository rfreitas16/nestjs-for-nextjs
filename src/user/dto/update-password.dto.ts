import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsString({ message: 'Senha precisa ser uma string' })
  @IsNotEmpty({ message: 'senha nao pode estar vazia' })
  currentPassword: string;

  @IsString({ message: 'Nova Senha precisa ser uma string' })
  @IsNotEmpty({ message: ' Nova senha nao pode estar vazia' })
  @MinLength(6, { message: ' Nova senha deve ter no minimo 6 caracteres' })
  newPassword: string;
}
