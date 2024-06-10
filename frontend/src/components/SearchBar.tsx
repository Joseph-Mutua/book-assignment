import React, { useState } from "react";
import { InputAdornment, Box, ClickAwayListener } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StyledTextField from "./styled/StyledTextField";
import SearchResultsDropdown from "./SearchResultsDropdown";
import useReadingListStore from "../store/useReadingListStore";
import { AnimatePresence } from "framer-motion";
import { Book } from "../types";
import { useSnackbar } from "../hooks/useSnackbar";

interface SearchBarProps {
  onSearch: (query: string) => void;
  results: Book[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, results }) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { showSnackbar } = useSnackbar();
  const { readingList, addBook } = useReadingListStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
    setShowDropdown(true);
  };

  const handleClickAway = () => {
    setShowDropdown(false);
  };

  const handleAddToReadingList = (book: Book) => {
    if (
      readingList.some(
        (b) => b.title === book.title && b.author === book.author
      )
    ) {
      showSnackbar(`${book.title} is already in the reading list`, "info");
    } else {
      addBook(book);
      showSnackbar(`${book.title} added to the reading list`, "success");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      position: "relative" as const,
      marginBottom: 4,
      width: "100%",
    },
    textFieldContainer: {
      width: "70%",
      position: "relative" as const,
    },
    dropdownContainer: {
      position: "absolute" as const,
      width: "100%",
      zIndex: 1300,
    },
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={styles.container}>
        <Box sx={styles.textFieldContainer}>
          <StyledTextField
            placeholder="Search for books by title..."
            value={query}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon aria-label="search icon" />
                </InputAdornment>
              ),
            }}
            fullWidth
            aria-label="Search for books"
          />
          <AnimatePresence>
            {showDropdown && query && (
              <Box sx={styles.dropdownContainer}>
                <SearchResultsDropdown
                  results={results}
                  onAdd={handleAddToReadingList}
                />
              </Box>
            )}
          </AnimatePresence>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default SearchBar;
