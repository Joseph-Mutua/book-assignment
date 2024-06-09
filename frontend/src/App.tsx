import React, { useState } from "react";
import { ApolloProvider, useQuery } from "@apollo/client";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { GET_BOOKS } from "./graphql/queries";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";
import theme from "./styles/theme";
import client from "./apollo-client";
import "./App.css";


interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [readingList, setReadingList] = useState<Book[]>([]);
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const books: Book[] = data?.books.filter((book: Book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBook = (book: Book) => {
    setReadingList([...readingList, book]);
  };

  const handleRemoveBook = (title: string) => {
    setReadingList(readingList.filter((book) => book.title !== title));
  };

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
            <Typography
              variant="h4"
              sx={{ color: "#335c6e", margin: "20px 0" }}
            >
              Book Assignment
            </Typography>
            <SearchBar onSearch={setSearchTerm} />
            <BookList books={books} onAdd={handleAddBook} />
            <ReadingList
              readingList={readingList}
              onRemove={handleRemoveBook}
            />
          </Container>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
