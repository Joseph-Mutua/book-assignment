import React from "react";
import { Typography, Grid, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import useReadingListStore from "../store/useReadingListStore";
import BookCard from "./BookCard";
import { Book } from "../types";
import { useSnackbar } from "../hooks/useSnackbar";

const ReadingList: React.FC = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const { readingList, removeBook } = useReadingListStore();
  const { showSnackbar } = useSnackbar();

  const handleRemoveFromReadingList = (book: Book) => {
    removeBook(book);
    showSnackbar(`${book.title} removed from reading list`, "success");
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      padding: 2,
      width: "100%",
    },
    title: {
      color: theme.palette.custom?.yellowDark || theme.palette.text.primary,
      padding: "8px",
      marginBottom: "16px",
      width: "100%",
      textAlign: "center" as const,
    },
    emptyMessage: {
      textAlign: "center" as const,
      color: theme.palette.text.secondary,
    },
  };

  return (
    <Box aria-label="Reading List" sx={styles.container}>
      <Box width="100%">
        <Typography variant="h4" sx={styles.title}>
          Reading List
        </Typography>
      </Box>
      
      {readingList.length === 0 && (
        <Box sx={styles.emptyMessage}>
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
    </Box>
  );
};

export default ReadingList;
