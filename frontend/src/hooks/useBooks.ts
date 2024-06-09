import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/queries";

export const useBooks = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  return { loading, error, data };
};
