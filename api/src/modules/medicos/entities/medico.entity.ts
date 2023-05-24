import { Medico as ModelMedico } from '@prisma/client'

export class Medico implements ModelMedico {
  readonly id: number
  readonly nombres: string
  readonly apellidos: string
}
