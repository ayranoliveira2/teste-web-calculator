import z from "zod";

export const createPeriodoSchema = z.object({
  dataInicial: z
    .string("dataInicial deve ser uma data válida")
    .min(1, { message: "dataInicial é obrigatório" }),
  dataFinal: z
    .string("dataFinal deve ser uma data válida")
    .min(1, { message: "dataFinal é obrigatório" }),
});

export type CreatePeriodoInput = z.infer<typeof createPeriodoSchema>;

export interface Periodo {
  id: string;
  dataInicial: Date;
  dataFinal: Date;
  duracaoSegundos: number;
}

export interface PeriodosResponse {
  total: number;
}
