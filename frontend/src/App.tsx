import React, { useState } from "react";
import { CssBaseline, Container, Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ApolloProvider } from "@apollo/client";
import SearchBar from "./components/SearchBar";
import ReadingList from "./components/ReadingList";
import theme from "./styles/theme";
import { useBooks } from "./hooks/useBooks";
import client from "./utils/apolloClient";

const App: React.FC = () => {
  const { loading, error, data } = useBooks();
  const [searchQuery, setSearchQuery] = useState("");

  interface Book {
    title: string;
    author: string;
    coverPhotoURL: string;
  }
  const handleSearch = (query: string) => {
    setSearchQuery(query);
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
              sx={{ color: theme.palette.text.primary, margin: "20px 0" }}
            >
              Book Assignment
            </Typography>
            <SearchBar onSearch={handleSearch} results={filteredBooks} />
            <ReadingList />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
          </Box>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
