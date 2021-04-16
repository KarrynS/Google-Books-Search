import React from "react";
import "./style.css";

const SearchForm = () => {
    return (
        <>
            <form className="form">
                <div className="form-group">
                    <input type="text" className="form-control" id="seachInput" aria-describedby="search" placeholder="Search for book"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>  
        </>
    )
}

export default SearchForm
