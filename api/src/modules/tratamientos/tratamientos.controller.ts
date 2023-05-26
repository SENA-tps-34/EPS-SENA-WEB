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
import { TratamientosService } from './tratamientos.service'
import { CreateTratamientoDto } from './dto/create-tratamiento.dto'
import { UpdateTratamientoDto } from './dto/update-tratamiento.dto'
import { NoContentException } from 'src/common/exceptions'

@Controller('tratamientos')
export class TratamientosController {
  constructor(private readonly tratamientosService: TratamientosService) {}

  @Post()
  async create(@Body() createTratamientoDto: CreateTratamientoDto) {
    return this.tratamientosService.create(createTratamientoDto)
  }

  @Get()
  async findAll() {
    const tratamientos = await this.tratamientosService.findAll()

    if (tratamientos.length === 0) {
      throw new NoContentException('No hay tratamientos registrados')
    }

    return tratamientos
  }

  @Get(':numero')
  async findOne(@Param('numero', ParseIntPipe) id: number) {
    const tratamiento = await this.tratamientosService.findOne(id)

    if (!tratamiento) {
      throw new NotFoundException('No se encontró el tratamiento')
    }

    return tratamiento
  }

  @Patch(':numero')
  async update(
    @Param('numero', ParseIntPipe) id: number,
    @Body() updateTratamientoDto: UpdateTratamientoDto
  ) {
    return await this.tratamientosService.update(id, updateTratamientoDto)
  }

  @Delete(':numero')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const removedTratamiento = await this.tratamientosService.remove(id)

    if (!removedTratamiento) {
      throw new NotFoundException('No se encontró el tratamiento')
    }

    return removedTratamiento
  }
}
