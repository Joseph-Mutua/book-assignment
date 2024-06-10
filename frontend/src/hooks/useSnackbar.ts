import { useSnackbar as useNotistack } from "notistack";
import { useTheme } from "@mui/material/styles";

export const useSnackbar = () => {
  const { enqueueSnackbar } = useNotistack();
  const theme = useTheme();

  const showSnackbar = (message: string, severity: "success" | "info") => {
    enqueueSnackbar(message, {
      variant: severity,
      style: {
        backgroundColor:
          severity === "success"
            ? theme.palette.custom?.teal
            : theme.palette.custom?.orangePastel,
        color: theme.palette.background.default,
        fontFamily: theme.typography.fontFamily,
      },
    });
  };

  return {
    showSnackbar,
  };
};
