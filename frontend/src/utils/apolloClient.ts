import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:4000/graphql",
  uri: "https://ello-backend.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
