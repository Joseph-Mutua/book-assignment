import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  useTheme,
  Divider,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

interface ConfirmationDialogProps {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open,
  title,
  description,
  onClose,
  onConfirm,
}) => {
  const theme = useTheme();

  const styles = {
    dialogPaper: {
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },

    dialogTitle: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: "1.25rem",
    },

    dialogContent: {
      display: "flex",
      alignItems: "center",
      paddingTop: theme.spacing(1),
    },

    icon: {
      color: theme.palette.warning.main,
      marginRight: theme.spacing(1),
    },

    dialogActions: {
      padding: theme.spacing(2),
    },

    cancelButton: {
      margin: theme.spacing(1),
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      borderRadius: 15,
      "&:hover": {
        color: theme.palette.background.default,
        backgroundColor: theme.palette.primary.light,
      },
    },

    removeButton: {
      margin: theme.spacing(1),
      borderRadius: 15,
      color: theme.palette.background.default,
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ sx: styles.dialogPaper }}
    >
      <DialogTitle id="alert-dialog-title" sx={styles.dialogTitle}>
        {title}
      </DialogTitle>
      <Divider />
      <DialogContent sx={styles.dialogContent}>
        <WarningAmberIcon sx={styles.icon} />
        <DialogContentText
          id="alert-dialog-description"
          sx={{ color: theme.palette.text.primary }}
        >
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={styles.dialogActions}>
        <Button onClick={onClose} variant="outlined" sx={styles.cancelButton}>
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={styles.removeButton}
          autoFocus
        >
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
