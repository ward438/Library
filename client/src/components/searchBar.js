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

        {books.map((item) => <SearchResults
            id={item.id}
            key={item.id}
            author={item.volumeInfo?.authors}
            title={item.volumeInfo?.title}
            description={item.volumeInfo?.description}
            image={item.volumeInfo.imageLinks?.smallThumbnail}
            info={null}
            updateBooksCallback={props.updateBooksCallback}
        />)}



    </React.Fragment>


}
