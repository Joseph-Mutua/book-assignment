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
  Grid,
  Typography,
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
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <ListItemAvatar>
              <Avatar
                src={
                  new URL(`../../${book.coverPhotoURL}`, import.meta.url).href
                }
                alt={`${book.title} cover`}
                variant="square"
                sx={{ borderRadius: 2 }}
                aria-label={`Cover of ${book.title}`}
              />
            </ListItemAvatar>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  noWrap
                  sx={{
                    fontWeight: "bold",
                    color: isBookInReadingList
                      ? theme.palette.text.disabled
                      : theme.palette.text.primary,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.title}
                </Typography>
              }
              secondary={
                <Typography
                  variant="body2"
                  noWrap
                  sx={{
                    fontStyle: "italic",
                    color: isBookInReadingList
                      ? theme.palette.text.disabled
                      : theme.palette.text.secondary,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.author}
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
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
                  borderRadius: 28,
                  margin: 1,
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
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
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  );
};

export default BookListItem;
