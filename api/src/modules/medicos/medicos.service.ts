import { Injectable } from '@nestjs/common'
import { CreateMedicoDto } from './dto/create-medico.dto'
import { UpdateMedicoDto } from './dto/update-medico.dto'
import { PrismaService } from '../database/prisma.service'

@Injectable()
export class MedicosService {
  constructor(private prisma: PrismaService) {}

  async create(createMedicoDto: CreateMedicoDto) {
    return await this.prisma.medico.create({ data: createMedicoDto })
  }

  async findAll() {
    return await this.prisma.medico.findMany({
      include: {
        citas: false,
      },
    })
  }

  async findOne(id: number) {
    return await this.prisma.medico.findUnique({
      where: { identificacion: id },
      include: {
        citas: true,
      },
    })
  }

  async update(id: number, updateMedicoDto: UpdateMedicoDto) {
    return await this.prisma.medico.update({
      where: { identificacion: id },
      data: updateMedicoDto,
    })
  }

  async remove(id: number) {
    return this.prisma.medico.delete({ where: { identificacion: id } })
  }
}
