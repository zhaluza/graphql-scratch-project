import { gql } from 'apollo-boost';

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

const GET_BOOK = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const ADD_BOOK = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { GET_AUTHORS, GET_BOOKS, GET_BOOK, ADD_BOOK };
