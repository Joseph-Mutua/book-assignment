import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Box,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Book } from "../types";
import ConfirmationDialog from "./ConfirmationDialog";

interface BookCardProps {
  book: Book;
  onAdd?: () => void;
  onRemove?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAdd, onRemove }) => {
  const [open, setOpen] = useState(false);
  const coverPhoto = new URL(`../../${book.coverPhotoURL}`, import.meta.url)
    .href;
  const theme = useTheme();

  const handleRemoveClick = () => {
    setOpen(true);
  };

  const handleConfirmRemove = () => {
    if (onRemove) {
      onRemove();
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      margin: 2,
      width: 250,
      height: 380,
      position: "relative" as const,
    },

    badge: {
      position: "absolute" as const,
      top: 8,
      left: 8,
      width: 40,
      height: 40,
      border: `2px solid ${theme.palette.custom?.yellowDark}`,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.custom?.yellowDark || "#000",
      fontWeight: "bold",
      backgroundColor: theme.palette.background.default,
      zIndex: 1,
    },

    cardMedia: {
      height: 200,
      objectFit: "cover",
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },

    button: {
      backgroundColor: onRemove
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
      color: theme.palette.common.white,
      borderRadius: 28,
      margin: 1,
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: onRemove
          ? theme.palette.secondary.dark
          : theme.palette.primary.dark,
      },
    },
  };

  return (
    <>
      <Card sx={styles.card} aria-label={`Card for book titled ${book.title}`}>
        <Box sx={styles.badge}>{book.readingLevel}</Box>
        <CardMedia
          component="img"
          sx={styles.cardMedia}
          image={coverPhoto}
          alt={`${book.title} cover`}
        />
        <CardContent sx={{ flex: "1 0 auto", padding: 2 }}>
          <Typography variant="h6" color="text.primary">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontStyle="italic">
            {book.author}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          sx={styles.button}
          onClick={onRemove ? handleRemoveClick : onAdd}
          startIcon={onRemove ? <DeleteIcon /> : <AddIcon />}
          aria-label={
            onRemove
              ? `Remove ${book.title} from reading list`
              : `Add ${book.title} to reading list`
          }
        >
          {onRemove ? "Remove" : "Add To List"}
        </Button>
      </Card>

      <ConfirmationDialog
        open={open}
        title={`Remove ${book.title}?`}
        description={`Are you sure you want to remove ${book.title} from your reading list?`}
        onClose={handleClose}
        onConfirm={handleConfirmRemove}
      />
    </>
  );
};

export default BookCard;
