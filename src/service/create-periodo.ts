import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface CreatePeriodoData {
  dataInicial: Date;
  dataFinal: Date;
}

export function useCreatePeriodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreatePeriodoData) => {
      console.log(data);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/periodos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        const message = responseData?.message || "Erro ao criar período";
        toast.error(message, {
          style: {
            background: "#FF4C4C",
            color: "#FFFFFF",
          },
        });

        throw new Error("Erro ao criar período");
      }

      toast.success("Período criado com sucesso", {
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
