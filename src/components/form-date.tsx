import { useForm } from "react-hook-form";
import { CreatePeriodoInput, createPeriodoSchema } from "@/types/periodo";
import { zodResolver } from "@hookform/resolvers/zod";

import { CircularProgress, Stack, TextField } from "@mui/material";
import { useCreatePeriodo } from "@/service/create-periodo";
import { Fragment } from "react";

const FormDate = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePeriodoInput>({
    resolver: zodResolver(createPeriodoSchema),
    defaultValues: {
      dataInicial: "",
      dataFinal: "1",
    },
  });

  const { mutate, isPending, isSuccess } = useCreatePeriodo();

  const onSubmit = (data: CreatePeriodoInput) => {
    mutate({
      dataInicial: new Date(data.dataInicial),
      dataFinal: new Date(data.dataFinal),
    });

    if (isSuccess) {
      reset();
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row gap-4 px-4 md:px-0">
        <Stack>
          <TextField
            {...register("dataInicial")}
            type="datetime-local"
            variant="outlined"
            fullWidth
            size="small"
            label="Data Inicial"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ borderRadius: 10 }}
          />

          {errors.dataInicial && (
            <span className="text-red-500 text-xs">
              {errors.dataInicial.message}
            </span>
          )}
        </Stack>

        <Stack>
          <TextField
            {...register("dataFinal")}
            type="datetime-local"
            variant="outlined"
            fullWidth
            size="small"
            label="Data Final"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ borderRadius: 10 }}
          />

          {errors.dataFinal && (
            <span className="text-red-500 text-xs">
              {errors.dataFinal.message}
            </span>
          )}
        </Stack>

        <button
          type="submit"
          disabled={isPending}
          className={`bg-[#0053C5] h-[40px] md:w-[150px] text-white rounded cursor-pointer hover:bg-[#0041A8] flex items-center justify-center ${
            isPending ? "text-xs gap-2" : " text-sm"
          }`}
        >
          {isPending ? (
            <Fragment>
              <CircularProgress size={14} sx={{ color: "white" }} />
              ADICIONANDO
            </Fragment>
          ) : (
            "ADICIONAR"
          )}
        </button>
      </div>
    </form>
  );
};

export default FormDate;
