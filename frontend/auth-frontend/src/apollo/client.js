import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4001/graphql', // auth service
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
