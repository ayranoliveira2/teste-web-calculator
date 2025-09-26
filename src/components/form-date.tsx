import { useForm } from "react-hook-form";
import { CreatePeriodoInput, createPeriodoSchema } from "@/types/periodo";
import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useCreatePeriodo } from "@/service/create-periodo";

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

  const { mutate, isPending } = useCreatePeriodo();

  const onSubmit = (dataForm: CreatePeriodoInput) => {
    mutate(
      {
        dataInicial: new Date(dataForm.dataInicial),
        dataFinal: new Date(dataForm.dataFinal),
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          px: { xs: 2, md: 0 },
        }}
      >
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
            sx={{ borderRadius: 10, width: { xs: "100%", md: "200px" } }}
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
            sx={{ borderRadius: 10, width: { xs: "100%", md: "200px" } }}
          />

          {errors.dataFinal && (
            <span className="text-red-500 text-xs">
              {errors.dataFinal.message}
            </span>
          )}
        </Stack>

        <Button
          type="submit"
          disabled={isPending}
          sx={{
            backgroundColor: "#0053C5",
            height: "40px",
            color: "white",
            width: { xs: "100%", md: "150px" },
            ":hover": { backgroundColor: "#0042A8" },
            borderRadius: 1,
          }}
        >
          {isPending ? (
            <CircularProgress size={14} sx={{ color: "white" }} />
          ) : (
            "ADICIONAR"
          )}
        </Button>
      </Box>
    </form>
  );
};

export default FormDate;
