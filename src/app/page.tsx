"use client";

import Box from "@mui/material/Box";

import TablePeriodos from "@/components/table-periodos";
import AccumulativeTotal from "@/components/accumulative-total";
import FormDate from "@/components/form-date";
import CardImage from "@/components/card-image";
import { useGetTotal } from "@/service/get-total";
import { useDeletePeriodos } from "@/service/delete-periodos";
import { CircularProgress, Typography } from "@mui/material";

export default function Home() {
  const { data, isLoading, error } = useGetTotal();

  const { mutate } = useDeletePeriodos();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: "100%", md: "100vh" },
        marginY: { xs: 5, md: 0 },
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            bgcolor: "background.paper",
            width: { xs: "90%", md: "999px" },
            height: { xs: "100%", md: "541px" },
            boxShadow: 3,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box
          sx={{
            bgcolor: "background.paper",
            width: { xs: "90%", md: "999px" },
            height: { xs: "100%", md: "541px" },
            boxShadow: 3,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography variant="h6" color="error">
            Ocorreu um erro ao carregar os dados.
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            flexGrow: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              width: { xs: "90%", md: "999px" },
              height: { xs: "100%", md: "541px" },
              boxShadow: 3,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <CardImage />

            <Box
              sx={{
                flexGrow: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 5,
                gap: 2,
              }}
            >
              <FormDate />

              <TablePeriodos periodos={data?.periodos!} />

              <AccumulativeTotal total={data?.total!} />

              <button
                onClick={() => mutate()}
                type="button"
                className="bg-[#FF4C4C] hover:bg-[#FF1C1C] w-[90%] md:w-full text-white text-xs py-3 px-10 rounded cursor-pointer"
              >
                LIMPAR
              </button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
