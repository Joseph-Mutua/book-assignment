import { ListItem, styled } from "@mui/material";

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));
