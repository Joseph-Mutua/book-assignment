import React from "react";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  SelectChangeEvent,
} from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";

interface SortComponentProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

const getStyles = (theme: Theme) => ({
  selectBox: {
    minWidth: 120,
    marginBottom: 2,
  },
  select: {
    borderRadius: "20px",
    "& .MuiSelect-select": {
      color: theme.palette.text.primary,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.custom?.turquoiseDark1,
      borderRadius: "20px",
    },
    "& .MuiSelect-icon": {
      color: "primary.main",
    },
  },
});

const SortComponent: React.FC<SortComponentProps> = ({
  sortOption,
  setSortOption,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSortOption(event.target.value as string);
  };

  return (
    <Box sx={styles.selectBox}>
      <FormControl fullWidth>
        <InputLabel id="sort-select-label">Sort By</InputLabel>
        <Select
          labelId="sort-select-label"
          id="sort-select"
          value={sortOption}
          label="Sort By"
          onChange={handleChange}
          sx={styles.select}
        >
          <MenuItem value="title">Book Title</MenuItem>
          <MenuItem value="readingLevel">Reading Level</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortComponent;
