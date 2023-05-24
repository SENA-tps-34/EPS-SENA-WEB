import { Tratamiento as ModelTratamiento } from '@prisma/client'

export class Tratamiento implements ModelTratamiento {
  readonly numero: number
  readonly fechaAsignado: string
  readonly descripcion: string
  readonly fechaInicio: string
  readonly fechaFin: string
  readonly observaciones: string | null
  readonly pacienteId: number
}
