import React, { useState } from "react";
import { InputAdornment, Box, ClickAwayListener } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StyledTextField from "./styled/StyledTextField";
import SearchResultsDropdown from "./SearchResultsDropdown";

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
}

const SearchBar: React.FC<{
  onSearch: (query: string) => void;
  results: Book[];
  onAdd: (book: Book) => void;
}> = ({ onSearch, results, onAdd }) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
    setShowDropdown(true);
  };

  const handleClickAway = () => {
    setShowDropdown(false);
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
          {" "}
          <StyledTextField
            placeholder="Search for books by title..."
            value={query}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          {showDropdown && query && (
            <Box sx={{ position: "relative", width: "100%" }}>
              <SearchResultsDropdown results={results} onAdd={onAdd} />
            </Box>
          )}
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default SearchBar;
