import React, { useState } from "react";
import { Typography, Grid, Box, Snackbar, Alert } from "@mui/material";
import BookCard from "./BookCard";
import { useTheme } from "@mui/material/styles";

interface ReadingListProps {
  books: { title: string; author: string; coverPhotoURL: string }[];
  onRemove: (book: {
    title: string;
    author: string;
    coverPhotoURL: string;
  }) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ books, onRemove }) => {
  const theme = useTheme();
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRemoveFromReadingList = (book: {
    title: string;
    author: string;
    coverPhotoURL: string;
  }) => {
    onRemove(book);
    setSnackbarMessage(`${book.title} removed from reading list`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Typography
        variant="h6"
        sx={{
          backgroundColor: theme.palette.custom?.yellowDark,
          padding: "8px",
          marginBottom: "16px",
        }}
      >
        Reading List
      </Typography>
      {books.length === 0 ? (
        <Box sx={{ textAlign: "center", color: theme.palette.text.secondary }}>
          <Typography variant="body1">
            No books in your reading list.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {books.map((book, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <BookCard
                book={book}
                onAdd={() => {}} // No add functionality in reading list
                onRemove={() => handleRemoveFromReadingList(book)}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ReadingList;
