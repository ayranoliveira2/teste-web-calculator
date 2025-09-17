import { Periodo } from "@/types/periodo";
import { formatPeriodo } from "@/utils/format-periodo";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { format } from "date-fns";

interface PeriodoRow {
  periodos: Periodo[];
}

const TablePeriodos = ({ periodos }: PeriodoRow) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: "none", width: { xs: "90%", md: "100%" } }}
    >
      <Table
        sx={{
          borderSpacing: 0,
          borderBottom: "none",
        }}
      >
        <TableHead sx={{ backgroundColor: "#F9FAFC", borderRadius: 0 }}>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "semibold",
                borderBottom: "none",
                fontSize: "0.8rem",
              }}
            >
              PERÍODO INICIAL
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "semibold",
                borderBottom: "none",
                fontSize: "0.8rem",
              }}
            >
              PERÍODO FINAL
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "semibold",
                borderBottom: "none",
                fontSize: "0.8rem",
              }}
            >
              SUBTOTAL DO PERÍODO
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {periodos.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={3}
                sx={{ borderBottom: "none" }}
                align="center"
              >
                <Typography sx={{ fontSize: "0.8rem" }}>
                  Nenhum período encontrado
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            periodos.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    {format(row.dataInicial, "dd/MM/yyyy HH:mm")}
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    {format(row.dataFinal, "dd/MM/yyyy HH:mm")}
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    {formatPeriodo(row.duracaoSegundos, "periodo")}
                  </Typography>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePeriodos;
