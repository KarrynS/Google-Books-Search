import React, { useState } from "react";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "./style.css"
import Book from "../components/Book";

function Search() {
  const [searchList, setSearchList] = useState([]);
  const [formObject, setFormObject] = useState({});


  //handle input change to update state
  const handleInputChange = event => {
    setFormObject(event.target.value);
  }

  //make call to API on submit and save to db
  const handleFormSubmit = event => {
    event.preventDefault();
    if(formObject) {
      const query = formObject;
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+intitle`)
        .then(res => {
          console.log(res.data.items)
          setSearchList(res.data.items)
        })
        .then(() => setFormObject(""))
        .catch(err => console.log(err));
    } 
  }

 const saveBook = (props)=> {
    

    if(props) {
      console.log(props) 
      API.saveBook({
       
        title: props.title,
        authors: props.authors,
        description: props.description,
        image: props.image,
        link: props.link
      })
      .then(res =>
        console.log("Book saved"))
      .catch(err => console.log(err));
    }
  }

    return (
        <>
          <Jumbotron /> 
          <div className="searchDiv">
            <form className="form">
                {/* <label htmlFor="bookSearch">Book Search</label> */}
                    <div className="form-group">
                        <input
                          onChange={handleInputChange}
                          type="text" 
                          className="form-control" 
                          id="seachInput" 
                          aria-describedby="search" 
                          placeholder="Search for book"/>
                    </div>
                    <button 
                          onClick={handleFormSubmit}
                          type="submit" 
                          className="btn searchBtn"

                        >Submit</button>
            </form>
          </div>
            
            
          <div className="bookResults">
            <p>Results</p>
            <ul>
              {console.log(searchList)}
              {searchList.map(book => {
                return (
                  <Book
                  key={book.id}
                  id={book.id} 
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description ? book.volumeInfo.description : "No description available"}
                  link={book.volumeInfo.infoLink}
                  image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/128x166.png"}
                  saveBook={saveBook}
                  />
                );
              })}
            </ul>
          </div>
        </>
    )
}           

export default Search;
