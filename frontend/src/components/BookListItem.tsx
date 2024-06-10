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

const BookListItem: React.FC<BookListItemProps> = React.memo(
  ({ book, onAdd }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const { readingList } = useReadingListStore();

    const isBookInReadingList = readingList.some(
      (b) => b.title === book.title && b.author === book.author
    );

    const handleAddToReadingList = () => {
      onAdd(book);
    };

    const bookCoverURL = new URL(`../../${book.coverPhotoURL}`, import.meta.url)
      .href;

    const styles = {
      primaryText: {
        fontWeight: "bold",
        color: isBookInReadingList
          ? theme.palette.text.disabled
          : theme.palette.text.primary,
        whiteSpace: isSmallScreen ? "normal" : "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },

      secondaryText: {
        fontStyle: "italic",
        color: isBookInReadingList
          ? theme.palette.text.disabled
          : theme.palette.text.secondary,
        whiteSpace: isSmallScreen ? "normal" : "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },

      button: {
        color: "white",
        borderRadius: 28,
        margin: 1,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
      },

      listItem: {
        "&:hover": {
          backgroundColor: !isBookInReadingList
            ? theme.palette.custom?.turquoiseLight
            : "inherit",
        },
      },
    };

    return (
      <>
        <ListItem sx={styles.listItem}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            direction={isSmallScreen ? "column" : "row"}
          >
            <Grid item>
              <ListItemAvatar>
                <Avatar
                  src={bookCoverURL}
                  alt={`${book.title} cover`}
                  variant="square"
                  sx={{ borderRadius: 2 }}
                  aria-label={`Cover of ${book.title}`}
                />
              </ListItemAvatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    noWrap={!isSmallScreen}
                    sx={styles.primaryText}
                  >
                    {book.title}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    noWrap={!isSmallScreen}
                    sx={styles.secondaryText}
                  >
                    {book.author}
                  </Typography>
                }
              />
            </Grid>
            <Grid item>
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
                  sx={styles.button}
                  aria-label={
                    isBookInReadingList
                      ? `Already added ${book.title} to reading list`
                      : `Add ${book.title} to reading list`
                  }
                  startIcon={!isBookInReadingList && <AddIcon />}
                >
                  {isBookInReadingList ? "Added" : "Add To List"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
      </>
    );
  }
);

export default BookListItem;
