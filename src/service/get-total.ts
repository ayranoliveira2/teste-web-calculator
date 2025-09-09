"use client";

import { PeriodosResponse } from "@/types/periodo";
import { useQuery } from "@tanstack/react-query";

export function useGetTotal() {
  return useQuery<PeriodosResponse>({
    queryKey: ["total"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/total`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar total");
      }

      return response.json();
    },
  });
}
