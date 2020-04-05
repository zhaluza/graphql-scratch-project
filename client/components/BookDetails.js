import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOK } from '../queries/queries';

const BookDetails = props => {
  const { bookId } = props;
  // get book
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId }
  });
  console.log(data);
  if (loading) return <p>Loading book details...</p>;
  if (error) return <p>Error</p>;
  const { book } = data;
  if (book) {
    return (
      <div className="book-details">
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul className="other-books-list">
          {book.author.books.map(book => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div className="book-details">No book selected...</div>;
  }
};

export default BookDetails;
