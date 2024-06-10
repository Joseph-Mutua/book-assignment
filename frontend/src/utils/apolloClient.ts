import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ello-backend.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
