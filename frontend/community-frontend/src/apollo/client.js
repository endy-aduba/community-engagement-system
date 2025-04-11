import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4002/graphql', // community-service
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
