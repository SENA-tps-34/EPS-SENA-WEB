import { IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator'

export class CreateConsultorioDto {
  @IsPositive()
  @IsOptional()
  readonly numero?: number

  @IsString()
  @IsNotEmpty()
  readonly nombre: string
}
