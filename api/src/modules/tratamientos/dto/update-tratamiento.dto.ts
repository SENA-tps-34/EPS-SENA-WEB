import { OmitType, PartialType } from '@nestjs/mapped-types'
import { CreateTratamientoDto } from './create-tratamiento.dto'

export class UpdateTratamientoDto extends PartialType(
  OmitType(CreateTratamientoDto, ['fechaAsignado', 'pacienteId'])
) {}
