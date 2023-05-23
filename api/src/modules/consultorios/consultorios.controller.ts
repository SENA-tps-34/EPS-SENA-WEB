import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ConsultoriosService } from './consultorios.service'
import { CreateConsultorioDto } from './dto/create-consultorio.dto'
import { UpdateConsultorioDto } from './dto/update-consultorio.dto'

@Controller('consultorios')
export class ConsultoriosController {
  constructor(private readonly consultoriosService: ConsultoriosService) {}

  @Post()
  create(@Body() createConsultorioDto: CreateConsultorioDto) {
    return this.consultoriosService.create(createConsultorioDto)
  }

  @Get()
  findAll() {
    return this.consultoriosService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultoriosService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsultorioDto: UpdateConsultorioDto) {
    return this.consultoriosService.update(+id, updateConsultorioDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultoriosService.remove(+id)
  }
}
