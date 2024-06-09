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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import useReadingListStore from "../store/useReadingListStore";

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
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
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

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const SearchResultsDropdown: React.FC<SearchResultsDropdownProps> = ({
  results,
  onAdd,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { readingList } = useReadingListStore();

  const handleAddToReadingList = (book: {
    title: string;
    author: string;
    coverPhotoURL: string;
  }) => {
    onAdd(book);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
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
                        new URL(`../${book.coverPhotoURL}`, import.meta.url)
                          .href
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
                  <Box
                    sx={{
                      marginLeft: isSmallScreen ? 0 : "auto",
                      marginTop: isSmallScreen ? 2 : 0,
                      width: isSmallScreen ? "100%" : "auto",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddToReadingList(book)}
                      fullWidth={isSmallScreen}
                      disabled={readingList.some(
                        (b) =>
                          b.title === book.title && b.author === book.author
                      )}
                    >
                      {readingList.some(
                        (b) =>
                          b.title === book.title && b.author === book.author
                      )
                        ? "Added"
                        : "Add to Reading List"}
                    </Button>
                  </Box>
                </StyledListItem>
                {index < results.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        )}
      </StyledBox>
    </motion.div>
  );
};

export default SearchResultsDropdown;
