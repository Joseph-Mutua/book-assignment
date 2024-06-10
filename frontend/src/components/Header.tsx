// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { useTheme } from "@mui/material/styles";

// const Header: React.FC = () => {
//   const theme = useTheme();
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         marginBottom: 4,
//       }}
//     >
//       <img
//         src={new URL(`../../public/Logo.svg`, import.meta.url).href}
//         alt="App Icon"
//         style={{ width: 100, height: 100, marginRight: 16 }}
//       />
//       <Typography
//         variant="h3"
//         sx={{ color: theme.palette.text.primary, margin: "20px 0" }}
//       >
//         Book Assignment
//       </Typography>
//     </Box>
//   );
// };

// export default Header;


import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 4,
        textAlign: isSmallScreen ? "center" : "left",
      }}
    >
      <img
        src={new URL(`../../public/Logo.svg`, import.meta.url).href}
        alt="App Icon"
        style={{
          width: isSmallScreen ? 80 : 100,
          height: isSmallScreen ? 80 : 100,
          marginBottom: isSmallScreen ? 8 : 0,
          marginRight: isSmallScreen ? 0 : 16,
        }}
      />
      <Typography
        variant={isSmallScreen ? "h4" : "h3"}
        sx={{ color: theme.palette.text.primary, margin: "20px 0" }}
      >
        Book Assignment
      </Typography>
    </Box>
  );
};

export default Header;
