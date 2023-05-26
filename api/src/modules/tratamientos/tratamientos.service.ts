import { Injectable } from '@nestjs/common'
import { CreateTratamientoDto } from './dto/create-tratamiento.dto'
import { UpdateTratamientoDto } from './dto/update-tratamiento.dto'
import { PrismaService } from '../database/prisma.service'

@Injectable()
export class TratamientosService {
  constructor(private prisma: PrismaService) {}

  async create(createTratamientoDto: CreateTratamientoDto) {
    return await this.prisma.tratamiento.create({ data: createTratamientoDto })
  }

  async findAll() {
    return await this.prisma.tratamiento.findMany({
      include: { paciente: true },
    })
  }

  async findOne(id: number) {
    return await this.prisma.tratamiento.findUnique({
      where: { numero: id },
      include: { paciente: true },
    })
  }

  async update(id: number, updateTratamientoDto: UpdateTratamientoDto) {
    return await this.prisma.tratamiento.update({
      where: { numero: id },
      data: updateTratamientoDto,
    })
  }

  async remove(id: number) {
    return await this.prisma.tratamiento.delete({ where: { numero: id } })
  }
}
