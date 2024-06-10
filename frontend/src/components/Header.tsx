import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const styles = {
    container: {
      display: "flex",
      flexDirection: isSmallScreen ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 4,
      textAlign: isSmallScreen ? "center" : "left",
    },

    image: {
      width: isSmallScreen ? 80 : 100,
      height: isSmallScreen ? 80 : 100,
      marginBottom: isSmallScreen ? 8 : 0,
      marginRight: isSmallScreen ? 0 : 16,
    },
    
    title: {
      color: theme.palette.text.primary,
      margin: "20px 0",
    },
  };

  return (
    <Box sx={styles.container}>
      <img
        src={new URL(`../../public/ReadingIcon.svg`, import.meta.url).href}
        alt="App Icon"
        style={styles.image}
      />
      <Typography variant={isSmallScreen ? "h4" : "h3"} sx={styles.title}>
        Book Assignment
      </Typography>
    </Box>
  );
};

export default Header;
