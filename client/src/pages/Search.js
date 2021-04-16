import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";

const Search = () => {
    return (
        <>
          <Jumbotron /> 
          <SearchForm/>
        </>
    )
}           

export default Search;
