import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common'
import { ConsultoriosService } from './consultorios.service'
import { CreateConsultorioDto } from './dto/create-consultorio.dto'
import { UpdateConsultorioDto } from './dto/update-consultorio.dto'

@Controller('consultorios')
export class ConsultoriosController {
  constructor(private readonly consultoriosService: ConsultoriosService) {}

  @Post()
  async create(@Body() createConsultorioDto: CreateConsultorioDto) {
    return await this.consultoriosService.create(createConsultorioDto)
  }

  @Get()
  async findAll() {
    return this.consultoriosService.findAll()
  }

  @Get(':numero')
  async findOne(@Param('numero', ParseIntPipe) id: number) {
    const consultorio = this.consultoriosService.findOne(id)

    if (!consultorio) {
      throw new NotFoundException('El consultorio no existe')
    }

    return consultorio
  }

  @Patch(':numero')
  async update(
    @Param('numero', ParseIntPipe) id: number,
    @Body() updateConsultorioDto: UpdateConsultorioDto
  ) {
    return await this.consultoriosService.update(id, updateConsultorioDto)
  }

  @Delete(':numero')
  async remove(@Param('numero', ParseIntPipe) id: number) {
    const consultorio = await this.consultoriosService.remove(id)

    if (!consultorio) {
      throw new NotFoundException('El consultorio no existe')
    }

    return consultorio
  }
}
