"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeletePeriodos() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/periodos`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        toast.error("Erro ao deletar período", {
          style: {
            background: "#FF4C4C",
            color: "#FFFFFF",
          },
        });

        throw new Error("Erro ao deletar período");
      }

      toast.success("Períodos deletados com sucesso", {
        style: {
          background: "#4BB543",
          color: "#FFFFFF",
        },
      });
      queryClient.invalidateQueries({ queryKey: ["total"] });

      return response.json();
    },
  });
}
