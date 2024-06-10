import React from "react";
import {
  List,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <StyledBox
        sx={{
          maxHeight: isSmallScreen ? "50vh" : "70vh", // Adjust the height based on screen size
          overflowY: "auto", // Enable vertical scrolling if content exceeds the max height
          width: "100%", // Ensure the dropdown takes the full width of its container
          padding: isSmallScreen ? 1 : 2, // Adjust padding for small screens
        }}
      >
        {results.length === 0 && (
          <ListItemText primary="No titles match your search" />
        )}
        {results.length > 0 && (
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
