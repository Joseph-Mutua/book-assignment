import React from "react";
import { List, ListItemText } from "@mui/material";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <StyledBox>
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
