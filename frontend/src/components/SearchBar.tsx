import React, { useState } from "react";
import {
  InputAdornment,
  Box,
  ClickAwayListener,
  Snackbar,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StyledTextField from "./styled/StyledTextField";
import SearchResultsDropdown from "./SearchResultsDropdown";
import useReadingListStore from "../store/useReadingListStore";
import { AnimatePresence } from "framer-motion";
import { Book } from "../types";

interface SearchBarProps {
  onSearch: (query: string) => void;
  results: Book[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, results }) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "info">(
    "success"
  );
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
      readingList.find(
        (b) => b.title === book.title && b.author === book.author
      )
    ) {
      setSnackbarMessage(`${book.title} is already in the reading list`);
      setSnackbarSeverity("info");
    } else {
      addBook(book);
      setSnackbarMessage(`${book.title} added to reading list`);
      setSnackbarSeverity("success");
    }
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          marginBottom: 4,
          width: "100%",
        }}
      >
        <Box sx={{ width: "70%", position: "relative" }}>
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
              <Box sx={{ position: "relative", width: "100%" }}>
                <SearchResultsDropdown
                  results={results}
                  onAdd={handleAddToReadingList}
                />
              </Box>
            )}
          </AnimatePresence>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </ClickAwayListener>
  );
};

export default SearchBar;
