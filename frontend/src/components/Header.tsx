import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 4,
      }}
    >
      <img
        src={new URL(`../../public/Logo.svg`, import.meta.url).href}
        alt="App Icon"
        style={{ width: 100, height: 100, marginRight: 16 }}
      />
      <Typography
        variant="h4"
        sx={{ color: theme.palette.text.primary, margin: "20px 0" }}
      >
        Book Assignment
      </Typography>
    </Box>
  );
};

export default Header;
