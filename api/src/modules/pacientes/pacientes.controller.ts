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
import { PacientesService } from './pacientes.service'
import { CreatePacienteDto } from './dto/create-paciente.dto'
import { UpdatePacienteDto } from './dto/update-paciente.dto'
import { NoContentException } from 'src/common/exceptions'

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Post()
  async create(@Body() createPacienteDto: CreatePacienteDto) {
    return await this.pacientesService.create(createPacienteDto)
  }

  @Get()
  async findAll() {
    const pacientes = await this.pacientesService.findAll()

    if (pacientes.length === 0) {
      throw new NoContentException('No hay pacientes registrados')
    }

    return pacientes
  }

  @Get(':identificacion')
  async findOne(@Param('identificacion', ParseIntPipe) id: number) {
    const paciente = await this.pacientesService.findOne(id)

    if (!paciente) {
      throw new NotFoundException('Paciente no encontrado')
    }

    return paciente
  }

  @Patch(':identificacion')
  async update(
    @Param('identificacion', ParseIntPipe) id: number,
    @Body() updatePacienteDto: UpdatePacienteDto
  ) {
    return await this.pacientesService.update(id, updatePacienteDto)
  }

  @Delete(':identificacion')
  async remove(@Param('identificacion', ParseIntPipe) id: number) {
    const removedPaciente = await this.pacientesService.remove(id)

    if (!removedPaciente) {
      throw new NotFoundException('Paciente no encontrado')
    }

    return removedPaciente
  }
}
