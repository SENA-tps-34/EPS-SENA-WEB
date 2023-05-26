import { Injectable } from '@nestjs/common'
import { CreatePacienteDto } from './dto/create-paciente.dto'
import { UpdatePacienteDto } from './dto/update-paciente.dto'
import { PrismaService } from '../database/prisma.service'

@Injectable()
export class PacientesService {
  constructor(private prisma: PrismaService) {}

  async create(createPacienteDto: CreatePacienteDto) {
    return await this.prisma.paciente.create({ data: createPacienteDto })
  }

  async findAll() {
    return await this.prisma.paciente.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.paciente.findUnique({
      where: { identificacion: id },
      include: { tratamientos: true, citas: true },
    })
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return await this.prisma.paciente.update({
      where: { identificacion: id },
      data: updatePacienteDto,
    })
  }

  async remove(id: number) {
    return await this.prisma.paciente.delete({ where: { identificacion: id } })
  }
}
