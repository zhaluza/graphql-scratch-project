import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import BookList from './BookList';
import AddBook from './AddBook';

// Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <div id="main">
      <h1>My Reading List</h1>
      <BookList />
      <AddBook />
    </div>
  </ApolloProvider>
);

export default App;
