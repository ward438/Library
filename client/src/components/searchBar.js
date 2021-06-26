import React, { useState, useEffect, Component } from "react";
import { Card, Form, Navbar, Button, FormControl } from 'react-bootstrap';
import SearchField from "react-search-field";
import SearchResults from "../pages/searchResults";
import GetBooks from "../utils/apiCall";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function SearchBar(props) {
    const [books, setBooks] = useState([]);

    const onSubmit = ((search) => {
        console.log(search);
        GetBooks(search).then(books => {
            setBooks(books);
        })
    })

    return <React.Fragment>
        <SearchField
            placeholder="Google Books Search..."
            onEnter={onSubmit}
            onSearchClick={onSubmit}
            searchText=""
            classNames="test-class"
        />

        {books.map((items) => <SearchResults
            key={items.id}
            author={items.volumeInfo?.authors}
            title={items.volumeInfo?.title}
            description={items.volumeInfo?.description}
            image={items.volumeInfo.imageLinks?.smallThumbnail}
            info={null}
        />)}



    </React.Fragment>


}
