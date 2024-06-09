import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  Snackbar,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import useReadingListStore from "../store/useReadingListStore";
import BookCard from "./BookCard";
import { Book } from "../types";

const ReadingList: React.FC = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
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
    <Box
      aria-label="Reading List"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={2}
      width="100%"
    >
      <Box width="100%">
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.custom?.yellowDark,
            padding: "8px",
            marginBottom: "16px",
            width: "100%",
            textAlign: "center",
          }}
        >
          Reading List
        </Typography>
      </Box>
      {readingList.length === 0 && (
        <Box sx={{ textAlign: "center", color: theme.palette.text.secondary }}>
          <Typography variant="body1">
            No Books in the Reading List. Search to Add
          </Typography>
        </Box>
      )}
      {readingList.length > 0 && (
        <Grid
          container
          spacing={2}
          justifyContent={isXsScreen ? "center" : "flex-start"}
          sx={{
            display: "flex",
          }}
        >
          <AnimatePresence>
            {readingList.map((book, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
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
    </Box>
  );
};

export default ReadingList;
