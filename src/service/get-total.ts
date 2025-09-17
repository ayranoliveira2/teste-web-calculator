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
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao buscar total");
      }

      return response.json();
    },
    retry: 1,
  });
}
