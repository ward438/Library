import React, { useState, useEffect } from "react";
// import { Card, Form, Navbar, Button, FormControl } from 'react-bootstrap';
// import { SearchField, onEnter } from "react-search-field";
// import ResultsCard from '../components/searchBar'
// import SearchResults from '../pages/searchResults'
import axios from "axios";


export default function GetBooks(props) {
    const KEY = 'AIzaSyDfsNpor9FxACWbZPoGa2ZXQOiLCgrqPZM'
    const [books, setBooks] = useState([])
    let searchResult = "";
    let book = "JurassicPark"
    useEffect(() => {
        axios({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${KEY}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
                .then(res => {
                    console.log(res);
                    let data = res.data;
                    setBooks(data);
                })
        }, [])

    })

    return (
        <React.Fragment>
            {/* {books.map((book) => <SearchResults
                key={book.id}
                title={book.volumeInfo.title}
            />)} */}
            <p>test</p>

        </React.Fragment>

    )
}

