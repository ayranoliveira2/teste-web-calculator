import { Typography, Box } from "@mui/material";

import Image from "next/image";

const CardImage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1.1,
        backgroundColor: "primary.main",
        height: "100%",
        borderTopLeftRadius: { xs: 0, md: 8 },
        borderBottomLeftRadius: { xs: 0, md: 8 },
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        maxWidth: "350px",
        padding: 8,
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: 34,
          fontWeight: "extraLight",
        }}
      >
        Calculadora de{" "}
        <span className="font-extrabold text-[#5DBFFD] italic">
          Tempo de Trabalho
        </span>
      </Typography>

      <Image
        src="/image.png"
        alt="Descrição da imagem"
        width={280}
        height={280}
      />
    </Box>
  );
};

export default CardImage;
