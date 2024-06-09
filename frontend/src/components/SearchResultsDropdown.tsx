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
import { motion } from "framer-motion";
import useReadingListStore from "../store/useReadingListStore";
import { StyledBox } from "./styled/StyledBox";
import { StyledListItem } from "./styled/StyledListIem";
import { Book } from "../types";

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
  const { readingList } = useReadingListStore();

  const handleAddToReadingList = (book: Book) => {
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
          <ListItem aria-label="No titles match your search">
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
                        new URL(`../../${book.coverPhotoURL}`, import.meta.url)
                          .href
                      }
                      alt={`${book.title} cover`}
                      variant="square"
                      sx={{ borderRadius: 2 }}
                      aria-label={`Cover of ${book.title}`}
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
                      aria-label={
                        readingList.some(
                          (b) =>
                            b.title === book.title && b.author === book.author
                        )
                          ? `Already added ${book.title} to reading list`
                          : `Add ${book.title} to reading list`
                      }
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
