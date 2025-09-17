import { formatPeriodo } from "@/utils/format-periodo";
import { Box, Typography } from "@mui/material";

interface AccumulativeTotalProps {
  total: number;
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
      <Typography sx={{ color: "text.secondary", fontSize: "22px" }}>
        {formatPeriodo(total, "total")}
      </Typography>
    </Box>
  );
};

export default AccumulativeTotal;
