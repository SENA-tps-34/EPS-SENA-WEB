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
import { MedicosService } from './medicos.service'
import { CreateMedicoDto } from './dto/create-medico.dto'
import { UpdateMedicoDto } from './dto/update-medico.dto'
import { NoContentException } from 'src/common/exceptions'

@Controller('medicos')
export class MedicosController {
  constructor(private readonly medicosService: MedicosService) {}

  @Post()
  async create(@Body() createMedicoDto: CreateMedicoDto) {
    return await this.medicosService.create(createMedicoDto)
  }

  @Get()
  async findAll() {
    const medicos = await this.medicosService.findAll()

    if (medicos.length === 0) {
      throw new NoContentException('No hay medicos registrados')
    }

    return medicos
  }

  @Get(':identificacion')
  async findOne(@Param('identificacion', ParseIntPipe) id: number) {
    const medico = await this.medicosService.findOne(id)

    if (!medico) {
      throw new NotFoundException('No se encontró el medico')
    }

    return medico
  }

  @Patch(':identificacion')
  async update(
    @Param('identificacion', ParseIntPipe) id: number,
    @Body() updateMedicoDto: UpdateMedicoDto
  ) {
    return await this.medicosService.update(id, updateMedicoDto)
  }

  @Delete(':identificacion')
  async remove(@Param('identificacion', ParseIntPipe) id: number) {
    const removedMedico = await this.medicosService.remove(id)

    if (!removedMedico) {
      throw new NotFoundException('No se encontró el medico')
    }

    return removedMedico
  }
}
