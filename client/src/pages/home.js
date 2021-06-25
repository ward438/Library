
import React from "react";

import { Card, Button } from "react-bootstrap";
import GetBooks from "../utils/apiCall"
import SearchBar from "../components/searchBar";

export default function Home(props) {
    return (
        
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     This is home
    </Card.Text>
    <SearchBar/>
    {/* <Button variant="primary" href={'/searchResults'}>Go somewhere</Button> */}
  </Card.Body>
</Card>
        
    )
}