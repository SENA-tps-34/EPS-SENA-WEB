import { Cita as ModelCita } from '@prisma/client'

export class Cita implements ModelCita {
  readonly numero: number
  readonly fecha: string
  readonly hora: string
  readonly pacienteId: number
  readonly medicoId: number
  readonly consultorioNumero: number
  readonly estado: string
  readonly observaciones: string | null
}
