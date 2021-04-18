import React, { useState, useEffect } from 'react';
import Saved from '../components/Saved';
import API from "../utils/API";

function SavedBooks() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

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


    return (
        <>
            <div className="savedBooks">
                <ul>
                    {books.map(book => {
                        return (
                            <Saved
                            key={book._id}
                            id={book._id}
                            title={book.title}
                            authors={book.authors}
                            description={book.description ? book.description : "No description available"}
                            link={book.link}
                            image={book.image ? book.image : "https://via.placeholder.com/128x166.png"}
                            />
                        );
                    })}  
                </ul>
            </div> 
        </>
    )
}

export default SavedBooks;
