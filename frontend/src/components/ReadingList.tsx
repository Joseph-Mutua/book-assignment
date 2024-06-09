import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

interface ReadingListProps {
  readingList: Book[];
  onRemove: (title: string) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ readingList, onRemove }) => {
  return (
    <div>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "#335c6e",
          backgroundColor: "#fabd33",
          padding: "10px",
        }}
      >
        Reading List
      </Typography>
      <List>
        {readingList.map((book, index) => (
          <ListItem
            key={`${book.title}-${index}`}
            sx={{ borderBottom: "1px solid #ccc" }}
          >
            <ListItemText
              primary={book.title}
              secondary={book.author}
              primaryTypographyProps={{ fontWeight: "bold", color: "#335c6e" }}
              secondaryTypographyProps={{
                fontStyle: "italic",
                color: "#28B8B8",
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onRemove(book.title)}
              sx={{ borderRadius: "8px" }}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ReadingList;
