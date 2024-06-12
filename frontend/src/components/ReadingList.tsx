import React, { useState, useEffect } from "react";
import { Typography, Grid, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import useReadingListStore from "../store/useReadingListStore";
import BookCard from "./BookCard";
import { Book } from "../types";
import { useSnackbar } from "../hooks/useSnackbar";
import SortComponent from "./SortComponent";

const ReadingList: React.FC = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { readingList, removeBook } = useReadingListStore();
  const { showSnackbar } = useSnackbar();
  const [sortOption, setSortOption] = useState("title");
  const [sortedList, setSortedList] = useState<Book[]>([]);

  const handleRemoveFromReadingList = (book: Book) => {
    removeBook(book);
    showSnackbar(`${book.title} removed from reading list`, "success");
  };

  const sortReadingList = (list: Book[], option: string): Book[] => {
    return list.sort((a, b) =>
      option === "title"
        ? a.title.localeCompare(b.title)
        : a.readingLevel.localeCompare(b.readingLevel)
    );
  };

  useEffect(() => {
    setSortedList(sortReadingList([...readingList], sortOption));
  }, [sortOption, readingList]);

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

    sortContainer: {
      display: "flex",
      justifyContent: isSmScreen ? "center" : "flex-end",
      width: "100%",
      marginBottom: "16px",
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

      {sortedList.length > 0 && (
        <Box sx={styles.sortContainer}>
          <SortComponent
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </Box>
      )}

      {sortedList.length === 0 && (
        <Box sx={styles.emptyMessage}>
          <Typography variant="body1">
            No Books in the Reading List. Search to Add
          </Typography>
        </Box>
      )}

      {sortedList.length > 0 && (
        <Grid
          container
          spacing={2}
          justifyContent={isXsScreen ? "center" : "flex-start"}
        >
          <AnimatePresence>
            {sortedList.map((book, index) => (
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
