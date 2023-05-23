import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { MedicosModule } from './modules/medicos/medicos.module'
import { ConsultoriosModule } from './modules/consultorios/consultorios.module'
import { PacientesModule } from './modules/pacientes/pacientes.module'
import { CitasModule } from './modules/citas/citas.module'
import { TratamientosModule } from './modules/tratamientos/tratamientos.module'

@Module({
  imports: [
    MedicosModule,
    ConsultoriosModule,
    PacientesModule,
    CitasModule,
    TratamientosModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
