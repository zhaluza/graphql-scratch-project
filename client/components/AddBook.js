import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from '../queries/queries';

const AddBook = props => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  // get authors
  const { loading, error, data } = useQuery(GET_AUTHORS);
  // add book
  const [addBook] = useMutation(ADD_BOOK);

  // Handle author loading
  if (loading) return <p>Loading authors...</p>;
  if (error) return <p>Error</p>;

  // submit new book
  const handleSubmitForm = e => {
    e.preventDefault();
    addBook({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries: [{ query: GET_BOOKS }]
    });
    setName('');
    setGenre('');
  };

  return (
    <form id="add-book" onSubmit={handleSubmitForm}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={e => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {data.authors.map(author => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
