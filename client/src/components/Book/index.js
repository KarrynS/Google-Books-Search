import React from "react";
import "./style.css";

const Book = (props) => {
    return (
        <>
            <div className="cardDiv">
               <h3>{props.title}</h3> 
               <p>Written by: {props.authors}</p>
               
                <div className="imgDesc">
                    <img src={props.image} alt="book thumbnail"></img>
                    <p>{props.description}</p>
                </div>
                
                <div className="buttons">
                    <button className="btn bookBtn">
                        <a href={props.link} target="blank">More</a>
                    </button>
                        <button     
                            onClick={() => props.saveBook(props)}
                            className="btn bookBtn">
                                <a  type="submit">Save</a>
                        </button> 
                </div>
            </div>  

                    
                    
        </>
    )
}

export default Book;
