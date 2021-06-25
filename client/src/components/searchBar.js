import React, { useState, useEffect, Component } from "react";
import { Card, Form, Navbar, Button, FormControl } from 'react-bootstrap';
// import ReactSearchBox from 'react-search-box';
// import GetBooks from '../utils/apiCall'

import SearchField from "react-search-field";
import SearchResults from "../pages/searchResults";
import GetBooks from "../utils/apiCall";




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
            placeholder="Search..."
            onEnter={onSubmit}
            onSearchClick={onSubmit}
            searchText=""
            classNames="test-class"
        />

        {books.map((items) => <SearchResults
            key={items.id}
            title={items.volumeInfo.title}
            info={null}
        />)}



    </React.Fragment>


}
