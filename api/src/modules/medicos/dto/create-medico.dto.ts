import { IsNotEmpty, IsString } from 'class-validator'

export class CreateMedicoDto {
  @IsString()
  @IsNotEmpty()
  readonly nombres: string

  @IsString()
  @IsNotEmpty()
  readonly apellidos: string
}
