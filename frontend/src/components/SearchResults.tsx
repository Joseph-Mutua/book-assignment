import React from "react";
import { List } from "@mui/material";
import BookItem from "./BookItem";

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
}

interface SearchResultsProps {
  results: Book[];
  onAdd: (book: Book) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onAdd }) => {
  return (
    <List sx={{  overflow: "auto" }}>
      {results.map((book, index) => (
        <BookItem
          key={index}
          title={book.title}
          author={book.author}
          onAction={() => onAdd(book)}
          actionLabel="Add to Reading List"
          actionColor="#5acccc"
        />
      ))}
    </List>
  );
};

export default SearchResults;
