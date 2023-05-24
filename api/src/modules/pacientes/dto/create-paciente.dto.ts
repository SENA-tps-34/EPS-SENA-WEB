import { IsIn, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator'
import { SEXOS, Sexo } from '../entities/paciente.entity'

export class CreatePacienteDto {
  @IsPositive()
  readonly id: number

  @IsString()
  @IsNotEmpty()
  readonly nombres: string

  @IsString()
  @IsNotEmpty()
  readonly apellidos: string

  @IsString()
  @IsNotEmpty()
  readonly fechaNacimiento: string

  @IsIn(SEXOS)
  @IsOptional()
  readonly sexo?: Sexo
}
