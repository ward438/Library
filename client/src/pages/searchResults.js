
import React from "react";
import '../utils/apiCall'
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddData from '../utils/addData';

export default function SearchResults(props) {
    return (
        <React.Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>Title: {props.title}</Card.Title>
                    <Card.Text>Author: {props.author}</Card.Text>
                    <Card.Text>Description: {props.description}</Card.Text>
                </Card.Body>
            </Card>
            <Button type="submit" onClick={() => AddData(props) }> add </Button>
        </React.Fragment>

    )
}