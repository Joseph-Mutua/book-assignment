import React from "react";
import { Typography, Grid } from "@mui/material";
import BookCard from "./BookCard";
import { useTheme } from "@mui/material/styles";

interface ReadingListProps {
  books: { title: string; author: string; coverPhotoURL: string }[];
  onRemove: (book: {
    title: string;
    author: string;
    coverPhotoURL: string;
  }) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ books, onRemove }) => {
  const theme = useTheme();

  return (
    <div>
      <Typography
        variant="h6"
        sx={{
          backgroundColor: theme.palette.custom?.yellowDark,
          padding: "8px",
          marginTop: "20px",
          marginBottom: "16px",
        }}
      >
        Reading List
      </Typography>
      <Grid container spacing={2}>
        {books.map((book, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <BookCard
              book={book}
              onAdd={() => {}}
              onRemove={() => onRemove(book)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ReadingList;
