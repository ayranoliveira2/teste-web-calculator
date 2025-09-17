import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import style from "styled-jsx/style";

interface CreatePeriodoData {
  dataInicial: Date;
  dataFinal: Date;
}

export function useCreatePeriodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreatePeriodoData) => {
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

        throw new Error(message);
      }

      const durationSeconds =
        (new Date(data.dataFinal).getTime() -
          new Date(data.dataInicial).getTime()) /
        1000;

      const dataSaveLocalStorage = {
        id: crypto.randomUUID(),
        dataInicial: data.dataInicial,
        dataFinal: data.dataFinal,
        duracaoSegundos: durationSeconds,
      };

      const existingPeriodos = JSON.parse(
        localStorage.getItem("periodos") || "[]"
      );

      existingPeriodos.push(dataSaveLocalStorage);

      localStorage.setItem("periodos", JSON.stringify(existingPeriodos));

      toast.success("Período criado com sucesso", {
        style: {
          background: "#4BB543",
          color: "#FFFFFF",
        },
      });
      queryClient.invalidateQueries({ queryKey: ["total"] });

      return response.json();
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
