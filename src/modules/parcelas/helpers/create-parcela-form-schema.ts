import { z } from "zod"

export const createParcelaFormSchema = z.object({
    nombre: z.string().min(3).max(50),
    nombrePropietario: z.string().min(3).max(50),
    partida: z.string(),
    baseImponible: z.coerce.number(),
    tipoPlanta: z.string(),
    superficie: z.coerce.number(),
    superficieEdificada: z.coerce.number(),
    circ: z.string().optional(),
    seccion: z.string().optional(),
    chacra: z.string().optional(),
    quinta: z.string().optional(),
    manzana: z.string().optional(),
    fraccion: z.string().optional(),
    parcela: z.string().optional(),
    subParcela: z.string().optional(),
})