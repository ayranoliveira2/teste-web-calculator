"use client";

import Box from "@mui/material/Box";

import TablePeriodos from "@/components/table-periodos";
import AccumulativeTotal from "@/components/accumulative-total";
import FormDate from "@/components/form-date";
import CardImage from "@/components/card-image";
import { useGetTotal } from "@/service/get-total";
import { useDeletePeriodos } from "@/service/delete-periodos";
import { Button, CircularProgress } from "@mui/material";
import { Periodo } from "@/types/periodo";
import { useLayoutEffect, useState } from "react";
import ErrorMessage from "@/components/error-message";

export default function Home() {
  const [periodos, setPeriodos] = useState<Periodo[]>([]);
  const { data, isLoading, error } = useGetTotal();
  const { mutate, isPending } = useDeletePeriodos();

  useLayoutEffect(() => {
    const storedPeriodos = localStorage.getItem("periodos") || "[]";
    setPeriodos(JSON.parse(storedPeriodos));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: "100%", md: "100vh" },
        marginBottom: { xs: 5, md: 0 },
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            bgcolor: "background.paper",
            width: { xs: "90%", md: "999px" },
            height: { xs: "300px", md: "541px" },
            boxShadow: 3,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: { xs: 20, md: 0 },
          }}
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <ErrorMessage
          message={String((error as Error).message)}
          onRetry={() => window.location.reload()}
        />
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
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 5,
                gap: 2,
                width: { xs: "100%", md: "642px" },
              }}
            >
              <FormDate setPeriodos={setPeriodos} />

              <TablePeriodos periodos={periodos} />

              <AccumulativeTotal total={data?.total!} />

              <Button
                onClick={() => {
                  mutate(undefined, {
                    onSuccess: () => setPeriodos([]),
                  });
                }}
                disabled={isPending || periodos.length === 0}
                type="button"
                sx={{
                  backgroundColor: "#FF4C4C",
                  height: "40px",
                  color: "white",
                  width: { xs: "90%", md: "100%" },
                  ":hover": { backgroundColor: "#E04343" },
                  ":disabled": { backgroundColor: "#FFB3B3", color: "white" },
                }}
              >
                {isPending ? (
                  <CircularProgress size={14} sx={{ color: "white" }} />
                ) : (
                  "LIMPAR"
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
