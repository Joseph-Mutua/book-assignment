import React from "react";
import TextField from "@mui/material/TextField";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search for books by title..."
      onChange={handleSearch}
      sx={{
        backgroundColor: "#cffafa",
        borderRadius: "8px",
        margin: "20px 0",
      }}
    />
  );
};

export default SearchBar;
