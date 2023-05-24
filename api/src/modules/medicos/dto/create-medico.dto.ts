import { IsNotEmpty, IsPositive, IsString } from 'class-validator'

export class CreateMedicoDto {
  @IsPositive()
  identificacion: number

  @IsString()
  @IsNotEmpty()
  readonly nombres: string

  @IsString()
  @IsNotEmpty()
  readonly apellidos: string
}
