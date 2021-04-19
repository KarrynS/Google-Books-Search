import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function Saved(props) {
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     loadBooks()
    // }, [])

    // function loadBooks() {
    //     API.getBooks()
    //     .then(res => {
    //         console.log("retrieving books")
    //         setBooks(res.data)
    //     })
    //     .catch(err => console.log(err));
    // }

     // Deletes a book from the database with a given id, then reloads books from the db
 

    return (
        <>
            <div className="cardDiv">
                <ul>
        
                                <h3>{props.book.title}</h3> 
                                <p>Written by: {props.book.authors}</p>
                                <div className="imgDesc">
                                    <img src={props.book.image ? props.book.image : "https://via.placeholder.com/128x166.png"} alt="book thumbnail"></img>
                                    <p>{props.book.description ? props.book.description : "No description available"}</p>
                                </div>
                                <div className="buttons">
                                    <button className="btn bookBtn">
                                        <a href={props.book.link} target="blank">More</a>
                                    </button>
                                    <button 
                                        onClick={() => props.delete(props.book._id)}
                                        className="btn bookBtn">
                                        <a type="submit">Delete</a>
                                    </button>
                                </div>
           
                
                </ul>
            </div>  
        </>
    )
}

export default Saved;