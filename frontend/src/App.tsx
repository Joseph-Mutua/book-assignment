import React, { useState } from "react";
import { CssBaseline, Container, Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ApolloProvider } from "@apollo/client";
import SearchBar from "./components/SearchBar";
import ReadingList from "./components/ReadingList";
import theme from "./styles/theme";
import { useBooks } from "./hooks/useBooks";
import client from "./apollo-client";

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
}

const App: React.FC = () => {
  const { loading, error, data } = useBooks();
  const [searchQuery, setSearchQuery] = useState("");
  const [readingList, setReadingList] = useState<Book[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleAddToReadingList = (book: Book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  const handleRemoveFromReadingList = (book: Book) => {
    setReadingList((prevList) =>
      prevList.filter((b) => b.title !== book.title)
    );
  };

  const filteredBooks =
    data?.books.filter((book: Book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box sx={{ marginTop: 4, textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ color: "#335c6e", margin: "20px 0" }}
            >
              Book Assignment
            </Typography>
            <SearchBar
              onSearch={handleSearch}
              results={filteredBooks}
              onAdd={handleAddToReadingList}
            />
            <ReadingList
              books={readingList}
              onRemove={handleRemoveFromReadingList}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
          </Box>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
