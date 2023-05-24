import { Medico as ModelMedico } from '@prisma/client'

export class Medico implements ModelMedico {
  readonly identificacion: number
  readonly nombres: string
  readonly apellidos: string
}
