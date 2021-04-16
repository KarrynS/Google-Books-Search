import React from "react";
import "./style.css";

const Navbar = () => {
    return (
        <>
           <nav className="navbar navbar-expand-lg justify-content-between navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Google Books</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/search">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/saved">Saved</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </>
    )
}

export default Navbar



