import { formatTotal } from "@/utils/format-periodo";
import { Box, Typography } from "@mui/material";

interface AccumulativeTotalProps {
  total: {
    horas: string;
    minutos: string;
    segundos: string;
  };
}

const AccumulativeTotal = ({ total }: AccumulativeTotalProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 0.5,
        width: { xs: "90%", md: "100%" },
        backgroundColor: "secondary.main",
        borderRadius: 2,
        padding: 1,
        mt: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: "primary.main" }}>
        Totalizador acumulado
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {formatTotal(
          Number(total.horas),
          Number(total.minutos),
          Number(total.segundos)
        )}
      </Typography>
    </Box>
  );
};

export default AccumulativeTotal;
