import React, { useState } from "react";
import { CssBaseline, Container, Box, Alert } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import SearchBar from "./components/SearchBar";
import ReadingList from "./components/ReadingList";
import Header from "./components/Header";
import LoadingSkeletons from "./components/LoadingSkeletons";
import theme from "./styles/theme";
import { useBooks } from "./hooks/useBooks";
import { Book } from "./types";

const App: React.FC = () => {
  const { loading, error, data } = useBooks();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredBooks =
    data?.books.filter((book: Book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Container>
            <Header />
            <Box sx={{ marginTop: 4, textAlign: "center" }}>
              <SearchBar onSearch={handleSearch} results={filteredBooks} />
              {loading && <LoadingSkeletons />}
              {!loading && error && (
                <Alert severity="error">{error.message}</Alert>
              )}
              {!loading && !error && <ReadingList />}
            </Box>
          </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
