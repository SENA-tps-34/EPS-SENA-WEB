import { IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator'

export class CreateCitaDto {
  @IsString()
  @IsNotEmpty()
  readonly fecha: string

  @IsString()
  @IsNotEmpty()
  readonly hora: string

  @IsPositive()
  readonly pacienteId: number

  @IsPositive()
  readonly medicoId: number

  @IsPositive()
  readonly consultorioNumero: number

  @IsString()
  @IsNotEmpty()
  readonly estado: string

  @IsString()
  @IsOptional()
  readonly observaciones?: string
}
