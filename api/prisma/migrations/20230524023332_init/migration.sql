/*
  Warnings:

  - The primary key for the `Medico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Medico` table. All the data in the column will be lost.
  - You are about to drop the column `consultorioNumero` on the `Cita` table. All the data in the column will be lost.
  - The primary key for the `Paciente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Paciente` table. All the data in the column will be lost.
  - Added the required column `identificacion` to the `Medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consultorioId` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identificacion` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Medico" (
    "identificacion" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL
);
INSERT INTO "new_Medico" ("apellidos", "nombres") SELECT "apellidos", "nombres" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
CREATE TABLE "new_Cita" (
    "numero" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "medicoId" INTEGER NOT NULL,
    "consultorioId" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "observaciones" TEXT,
    CONSTRAINT "Cita_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("identificacion") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cita_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "Medico" ("identificacion") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cita_consultorioId_fkey" FOREIGN KEY ("consultorioId") REFERENCES "Consultorio" ("numero") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cita" ("estado", "fecha", "hora", "medicoId", "numero", "observaciones", "pacienteId") SELECT "estado", "fecha", "hora", "medicoId", "numero", "observaciones", "pacienteId" FROM "Cita";
DROP TABLE "Cita";
ALTER TABLE "new_Cita" RENAME TO "Cita";
CREATE TABLE "new_Paciente" (
    "identificacion" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "fechaNacimiento" TEXT NOT NULL,
    "sexo" TEXT NOT NULL DEFAULT 'indefinido'
);
INSERT INTO "new_Paciente" ("apellidos", "fechaNacimiento", "nombres", "sexo") SELECT "apellidos", "fechaNacimiento", "nombres", "sexo" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
CREATE TABLE "new_Tratamiento" (
    "numero" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fechaAsignado" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fechaInicio" TEXT NOT NULL,
    "fechaFin" TEXT NOT NULL,
    "observaciones" TEXT,
    "pacienteId" INTEGER NOT NULL,
    CONSTRAINT "Tratamiento_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("identificacion") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tratamiento" ("descripcion", "fechaAsignado", "fechaFin", "fechaInicio", "numero", "observaciones", "pacienteId") SELECT "descripcion", "fechaAsignado", "fechaFin", "fechaInicio", "numero", "observaciones", "pacienteId" FROM "Tratamiento";
DROP TABLE "Tratamiento";
ALTER TABLE "new_Tratamiento" RENAME TO "Tratamiento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
