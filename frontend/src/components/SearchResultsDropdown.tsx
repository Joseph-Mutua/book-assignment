import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Button,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

interface SearchResultsDropdownProps {
  results: { title: string; author: string; coverPhotoURL: string }[];
  onAdd: (book: {
    title: string;
    author: string;
    coverPhotoURL: string;
  }) => void;
}

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "calc(100% + 8px)", // Ensure dropdown appears just below the search bar with a small gap
  width: "100%",
  maxHeight: "500px",
  overflowY: "auto",
  backgroundColor: "#fff",
  border: "1px solid #335c6e",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
  // Custom scrollbar styling
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.custom?.turquoiseLight,
  },
}));

const StyledListItem = styled(ListItem)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const SearchResultsDropdown: React.FC<SearchResultsDropdownProps> = ({
  results,
  onAdd,
}) => {
  const theme = useTheme();

  return (
    <StyledBox>
      {results.length === 0 ? (
        <ListItem>
          <ListItemText primary="No titles match your search" />
        </ListItem>
      ) : (
        <List>
          {results.map((book, index) => (
            <React.Fragment key={index}>
              <StyledListItem>
                <ListItemAvatar>
                  <Avatar
                    src={
                      new URL(`../${book.coverPhotoURL}`, import.meta.url).href
                    }
                    alt={`${book.title} cover`}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={book.title}
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    color: theme.palette.text.primary,
                  }}
                  secondary={book.author}
                  secondaryTypographyProps={{
                    fontStyle: "italic",
                    color: theme.palette.text.secondary,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onAdd(book)}
                  sx={{ marginLeft: "auto" }}
                >
                  Add to Reading List
                </Button>
              </StyledListItem>
              {index < results.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      )}
    </StyledBox>
  );
};

export default SearchResultsDropdown;
