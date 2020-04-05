import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = props => {
  const [selected, setSelected] = useState(null);
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) return <p>Loading Books...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <ul className="book-list">
        {data.books.map(book => (
          <li key={book.id} onClick={() => setSelected(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selected} />
      <button onClick={() => setSelected(null)}>Clear Book</button>
    </div>
  );
};

export default BookList;
