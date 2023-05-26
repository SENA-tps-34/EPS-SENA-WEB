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
import { CitasService } from './citas.service'
import { CreateCitaDto } from './dto/create-cita.dto'
import { UpdateCitaDto } from './dto/update-cita.dto'
import { NoContentException } from 'src/common/exceptions'

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Post()
  async create(@Body() createCitaDto: CreateCitaDto) {
    return await this.citasService.create(createCitaDto)
  }

  @Get()
  async findAll() {
    const citas = await this.citasService.findAll()

    if (citas.length === 0) {
      throw new NoContentException('No hay citas registradas')
    }

    return citas
  }

  @Get(':numero')
  async findOne(@Param('numero', ParseIntPipe) id: number) {
    const cita = await this.citasService.findOne(id)

    if (!cita) {
      throw new NotFoundException('Cita no encontrada')
    }

    return cita
  }

  @Patch(':numero')
  async update(
    @Param('numero', ParseIntPipe) id: number,
    @Body() updateCitaDto: UpdateCitaDto
  ) {
    return await this.citasService.update(id, updateCitaDto)
  }

  @Delete(':numero')
  async remove(@Param('numero', ParseIntPipe) id: number) {
    const removedCita = await this.citasService.remove(id)

    if (!removedCita) {
      throw new NotFoundException('Cita no encontrada')
    }

    return removedCita
  }
}
