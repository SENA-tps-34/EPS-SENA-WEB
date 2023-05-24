import { IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator'

export class CreateTratamientoDto {
  @IsString()
  @IsNotEmpty()
  readonly fechaAsignado: string

  @IsString()
  readonly descripcion: string

  @IsString()
  @IsNotEmpty()
  readonly fechaInicio: string

  @IsString()
  @IsNotEmpty()
  readonly fechaFin: string

  @IsString()
  @IsOptional()
  readonly observaciones?: string

  @IsPositive()
  readonly pacienteId: number
}
