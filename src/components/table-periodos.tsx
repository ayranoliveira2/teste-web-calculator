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
        <TableHead sx={{ backgroundColor: "grey.100" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", borderBottom: "none" }}>
              PERÍODO INICIAL
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", borderBottom: "none" }}>
              PERÍODO FINAL
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", borderBottom: "none" }}>
              SUBTOTAL DO PERÍODO
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {periodos.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} align="center">
                <Typography sx={{ fontSize: "0.9rem" }}>
                  Nenhum período encontrado
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            periodos.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Typography>
                    {format(new Date(row.dataInicial), "dd/MM/yyyy HH:mm")}
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Typography>
                    {format(new Date(row.dataFinal), "dd/MM/yyyy HH:mm")}
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Typography>{formatPeriodo(row.duracaoSegundos)}</Typography>
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
