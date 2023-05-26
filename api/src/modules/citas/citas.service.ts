import { Injectable } from '@nestjs/common'
import { CreateCitaDto } from './dto/create-cita.dto'
import { UpdateCitaDto } from './dto/update-cita.dto'
import { PrismaService } from '../database/prisma.service'

@Injectable()
export class CitasService {
  constructor(private prisma: PrismaService) {}

  async create(createCitaDto: CreateCitaDto) {
    return await this.prisma.cita.create({ data: createCitaDto })
  }

  async findAll() {
    return await this.prisma.cita.findMany({
      include: {
        paciente: true,
        medico: true,
        consultorio: true,
      },
    })
  }

  async findOne(id: number) {
    return await this.prisma.cita.findUnique({
      where: { numero: id },
      include: {
        consultorio: true,
        medico: true,
        paciente: true,
      },
    })
  }

  async update(id: number, updateCitaDto: UpdateCitaDto) {
    return await this.prisma.cita.update({ where: { numero: id }, data: updateCitaDto })
  }

  async remove(id: number) {
    return await this.prisma.cita.delete({ where: { numero: id } })
  }
}
