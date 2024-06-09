import React, { useState } from "react";
import { Typography, Grid, Box, Snackbar, Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import useReadingListStore from "../store/useReadingListStore";
import BookCard from "./BookCard";
import { Book } from "../types";

const ReadingList: React.FC = () => {
  const theme = useTheme();
  const { readingList, removeBook } = useReadingListStore();
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRemoveFromReadingList = (book: Book) => {
    removeBook(book);
    setSnackbarMessage(`${book.title} removed from reading list`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div aria-label="Reading List">
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
      {readingList.length === 0 ? (
        <Box sx={{ textAlign: "center", color: theme.palette.text.secondary }}>
          <Typography variant="body1">
            No books in the reading list. Search to Add
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          <AnimatePresence>
            {readingList.map((book, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <BookCard
                    book={book}
                    onRemove={() => handleRemoveFromReadingList(book)}
                  />
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
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
