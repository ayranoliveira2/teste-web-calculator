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
        alignItems: "center",
        flexDirection: "column",
        width: { xs: "100%", md: "357px" },
        padding: 1,
        paddingTop: { xs: 4, md: 2 },
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: 34,
          fontWeight: "extraLight",
          maxWidth: 240,
          marginBottom: -2,
        }}
      >
        Calculadora <br /> de{" "}
        <span
          style={{
            fontWeight: 900,
            color: "#5DBFFD",
            fontStyle: "italic",
          }}
        >
          Tempo de Trabalho
        </span>
      </Typography>

      <Image
        src="/image.png"
        alt="Descrição da imagem"
        width={296}
        height={296}
      />
    </Box>
  );
};

export default CardImage;
