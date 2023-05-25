import { Module } from '@nestjs/common'
import { MedicosModule } from './modules/medicos/medicos.module'
import { ConsultoriosModule } from './modules/consultorios/consultorios.module'
import { PacientesModule } from './modules/pacientes/pacientes.module'
import { CitasModule } from './modules/citas/citas.module'
import { TratamientosModule } from './modules/tratamientos/tratamientos.module'
import { DatabaseModule } from './modules/database/database.module'

@Module({
  imports: [
    DatabaseModule.forRoot(),
    MedicosModule,
    ConsultoriosModule,
    PacientesModule,
    CitasModule,
    TratamientosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
