import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Book } from "../types";
import useReadingListStore from "../store/useReadingListStore";

interface BookListItemProps {
  book: Book;
  onAdd: (book: Book) => void;
}

const BookListItem: React.FC<BookListItemProps> = ({ book, onAdd }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { readingList } = useReadingListStore();

  const handleAddToReadingList = () => {
    onAdd(book);
  };

  const isBookInReadingList = readingList.some(
    (b) => b.title === book.title && b.author === book.author
  );

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            src={new URL(`../../${book.coverPhotoURL}`, import.meta.url).href}
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
            onClick={handleAddToReadingList}
            fullWidth={isSmallScreen}
            disabled={isBookInReadingList}
            sx={{
                color: "white",
            }}
            aria-label={
              isBookInReadingList
                ? `Already added ${book.title} to reading list`
                : `Add ${book.title} to reading list`
            }
            startIcon={!isBookInReadingList && <AddIcon />}
          >
            {isBookInReadingList ? "Added" : "Add to Reading List"}
          </Button>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default BookListItem;
