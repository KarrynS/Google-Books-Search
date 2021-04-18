import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function Saved(props) {
    const [books, setBooks] = useState([]);
    // const[formObject,setFormObject] =useState({});

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
        .then(res => {
            console.log("retrieving books")
            setBooks(res.data)
        })
        .catch(err => console.log(err));
    }

     // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

    return (
        <>
            <div className="cardDiv">
                <ul>
                    { console.log(books)}
                    {books.map(book => {
                        return (
                            <>
                                <h3>{book.title}</h3> 
                                <p>Written by: {book.authors}</p>
                                <div className="imgDesc">
                                    <img src={book.image} alt="book thumbnail"></img>
                                    <p>{book.description}</p>
                                </div>
                                <div className="buttons">
                                    <button className="btn bookBtn">
                                        <a href={book.link} target="blank">More</a>
                                    </button>
                                    <button 
                                        onClick={() => deleteBook(book._id)}
                                        className="btn bookBtn">
                                        <a type="submit">Delete</a>
                                    </button>
                                </div>
                             </>
                        );
                    })}
                </ul>
            </div>  
        </>
    )
}

export default Saved;