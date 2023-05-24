import { Paciente as ModelPaciente } from '@prisma/client'

export const SEXOS = ['masculino', 'femenino', 'indefinido'] as const
export type Sexo = typeof SEXOS[number]

export class Paciente implements ModelPaciente {
  readonly identificacion: number
  readonly nombres: string
  readonly apellidos: string
  readonly fechaNacimiento: string
  readonly sexo: Sexo
}
