import { Injectable } from '@nestjs/common'
import { CreateConsultorioDto } from './dto/create-consultorio.dto'
import { UpdateConsultorioDto } from './dto/update-consultorio.dto'
import { PrismaService } from '../database/prisma.service'

@Injectable()
export class ConsultoriosService {
  constructor(private prisma: PrismaService) {}

  async create(createConsultorioDto: CreateConsultorioDto) {
    return await this.prisma.consultorio.create({ data: createConsultorioDto })
  }

  async findAll() {
    return await this.prisma.consultorio.findMany({
      include: {
        citas: false,
      },
    })
  }

  async findOne(id: number) {
    return await this.prisma.consultorio.findUnique({
      where: { numero: id },
      include: {
        citas: true,
      },
    })
  }

  async update(id: number, updateConsultorioDto: UpdateConsultorioDto) {
    return await this.prisma.consultorio.update({
      where: { numero: id },
      data: updateConsultorioDto,
    })
  }

  async remove(id: number) {
    return await this.prisma.consultorio.delete({ where: { numero: id } })
  }
}
