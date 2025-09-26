"use client";

import { PeriodosResponse, TotalResponse } from "@/types/periodo";
import { useQuery } from "@tanstack/react-query";

export function useGetData() {
  return useQuery<{ total: TotalResponse; periodos: PeriodosResponse }>({
    queryKey: ["totalAndPeriodos"],
    queryFn: async () => {
      const [totalResponse, PeriodoResponse] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/total`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/periodos`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      ]);

      if (!totalResponse.ok || !PeriodoResponse.ok) {
        const errorData = await totalResponse.json();
        throw new Error(errorData.message || "Erro ao buscar dados");
      }

      return {
        total: await totalResponse.json(),
        periodos: await PeriodoResponse.json(),
      };
    },
    retry: 0,
  });
}
