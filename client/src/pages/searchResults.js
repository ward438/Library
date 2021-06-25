
import React from "react";
import '../utils/apiCall'
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SearchResults(props) {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>Title: {props.title}</Card.Title>
                <Card.Text>Author: {props.author}</Card.Text>
                <Card.Text>Description: {props.description}</Card.Text>
            </Card.Body>
        </Card>

    )
}