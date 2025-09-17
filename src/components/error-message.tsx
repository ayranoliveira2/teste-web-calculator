"use client";

import { Box, Typography, Button } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import React from "react";

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: { xs: "90%", md: "999px" },
        height: { xs: "100%", md: "541px" },
        boxShadow: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        mt: { xs: 20, md: 0 },
        p: 3,
        gap: 2,
      }}
    >
      <ReportProblemIcon sx={{ fontSize: 50, color: "#FF4C4C" }} />
      <Typography variant="h6" color="error">
        Ops! Algo deu errado.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Verifique sua conexão com a internet e tente novamente.
      </Typography>
      {message && (
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      )}
      {onRetry && (
        <Button
          variant="contained"
          color="error"
          onClick={onRetry}
          sx={{ mt: 2 }}
        >
          Tentar novamente
        </Button>
      )}
    </Box>
  );
};

export default ErrorMessage;
