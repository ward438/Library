
import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function User(props) {

    return (
        <Container>
             <Card style={{ width: '18rem' }}>
            {props.books.map(book => book.title)}
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
            </Card.Body>
        </Card>
        </Container>
       

    )
}