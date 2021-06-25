
import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function User(props) {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>Username: </Card.Title>
                <Card.Text>Books: </Card.Text>
                
            </Card.Body>
        </Card>

    )
}