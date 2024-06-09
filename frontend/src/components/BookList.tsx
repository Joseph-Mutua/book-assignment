import React from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

interface BookListProps {
  books: Book[];
  onAdd: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onAdd }) => {
  return (
    <List>
      {books.map((book, index) => (
        <ListItem
          key={`${book.title}-${index}`}
          sx={{ borderBottom: "1px solid #ccc" }}
        >
          <ListItemText
            primary={book.title}
            secondary={book.author}
            primaryTypographyProps={{ fontWeight: "bold", color: "#335c6e" }}
            secondaryTypographyProps={{ fontStyle: "italic", color: "#28B8B8" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => onAdd(book)}
            sx={{ borderRadius: "8px" }}
          >
            Add to Reading List
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
