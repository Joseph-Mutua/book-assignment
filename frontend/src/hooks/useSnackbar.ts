import { useState } from "react";

export const useSnackbar = () => {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "info">(
    "success"
  );

  const showSnackbar = (message: string, severity: "success" | "info") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return {
    snackbarMessage,
    openSnackbar,
    snackbarSeverity,
    showSnackbar,
    handleCloseSnackbar,
  };
};
