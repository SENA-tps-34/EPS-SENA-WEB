import { Consultorio as ModelConsultorio } from '@prisma/client'

export class Consultorio implements ModelConsultorio {
  readonly numero: number
  readonly nombre: string
}
