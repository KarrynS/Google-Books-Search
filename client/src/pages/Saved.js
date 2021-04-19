import React, { useState, useEffect } from 'react';
import Saved from '../components/Saved';
import API from "../utils/API";

function SavedBooks() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
    loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
    API.getBooks()
        .then(res => 
        setBooks(res.data)
        )
        .catch(err => console.log(err));
    };

    function deleteBook(id) {
        API.deleteBook(id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }

    return (
        <>
            <div className="savedBooks">
                <ul>
                    {books.map(book => {
                        return (
                            <Saved
                            key={book._id}
                            book={book}
                            delete={deleteBook}
                            />
                        );
                    })}  
                </ul>
            </div> 
        </>
    )
}

export default SavedBooks;
