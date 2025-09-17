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
        const responseData = await response.json();
        const message = responseData?.message || "Erro ao deletar períodos";

        throw new Error(message);
      }

      localStorage.removeItem("periodos");

      toast.success("Períodos deletados com sucesso", {
        style: {
          background: "#4BB543",
          color: "#FFFFFF",
        },
      });
      queryClient.invalidateQueries({ queryKey: ["total"] });
    },

    onError: (error) => {
      const errors =
        error.message === "Failed to fetch" ? "Erro de conexão" : error.message;

      toast.error(errors, {
        style: {
          background: "#FF4C4C",
          color: "#FFFFFF",
        },
      });

      if (errors === "Erro de conexão") {
      }
    },
  });
}
