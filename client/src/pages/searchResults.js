
import React from "react";
import '../utils/apiCall'
import { Card, Button } from "react-bootstrap";


export default function SearchResults(props) {
    return (
      
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
              
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    
    )
}