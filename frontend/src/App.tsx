import React, { useState } from "react";
import { CssBaseline, Container, Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ApolloProvider,} from "@apollo/client";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import ReadingList from "./components/ReadingList";
import theme from "./styles/theme";
import { useBooks } from './hooks/useBook';
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

  const filteredBooks = data?.books.filter((book: Book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box sx={{ marginTop: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 4,
              }}
            >
              <Typography variant="h4" sx={{ color: "#335c6e" }}>
                Book Assignment
              </Typography>
            </Box>
            <SearchBar onSearch={handleSearch} />
            <ReadingList
              books={readingList}
              onRemove={handleRemoveFromReadingList}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {filteredBooks && (
              <SearchResults
                results={filteredBooks}
                onAdd={handleAddToReadingList}
              />
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
