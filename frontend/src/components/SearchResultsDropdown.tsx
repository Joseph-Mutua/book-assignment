import React from "react";
import { List, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Book } from "../types";
import BookListItem from "./BookListItem";
import { StyledBox } from "./styled/StyledBox";

interface SearchResultsDropdownProps {
  results: Book[];
  onAdd: (book: Book) => void;
}

const SearchResultsDropdown: React.FC<SearchResultsDropdownProps> = ({
  results,
  onAdd,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const styles = {
    container: {
      maxHeight: isSmallScreen ? "50vh" : "70vh",
      overflowY: "auto" as const,
      width: "100%",
      padding: isSmallScreen ? 1 : 2,
      position: "absolute" as const,
      zIndex: 1300,
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.shadows[5],
      borderRadius: theme.shape.borderRadius,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <StyledBox sx={styles.container}>
        {results.length === 0 ? (
          <ListItemText primary="No titles match your search" />
        ) : (
          <List>
            {results.map((book, index) => (
              <BookListItem key={index} book={book} onAdd={onAdd} />
            ))}
          </List>
        )}
      </StyledBox>
    </motion.div>
  );
};

export default SearchResultsDropdown;
