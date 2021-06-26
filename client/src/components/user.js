
import React from "react";
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function User(props) {

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>Username: Demo User</Card.Title>
                <Card.Text>Books: {props.books.map(book => book.title)}</Card.Text>
            </Card.Body>
        </Card>

    )
}