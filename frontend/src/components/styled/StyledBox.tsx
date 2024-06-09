import { Box, styled } from "@mui/material";

interface StyledBoxProps {
  borderColor?: string;
}

export const StyledBox = styled(Box)<StyledBoxProps>(
  ({ theme, borderColor }) => ({
    position: "absolute",
    top: "calc(100% + 8px)",
    width: "100%",
    maxHeight: "500px",
    overflowY: "auto",
    backgroundColor: "#fff",
    border: `1px solid ${borderColor || theme.palette.primary.main}`,
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
      borderRadius: "8px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: theme.palette.custom?.turquoiseLight,
    },
  })
);
