import React, { useState } from "react";
import { InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StyledTextField from "./styled/StyledTextField"; // Adjust the import path as necessary

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
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
        sx={{ width: "50%" }} // Adjust the width as needed
      />
    </Box>
  );
};

export default SearchBar;
