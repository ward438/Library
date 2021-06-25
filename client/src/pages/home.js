
import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "../components/searchBar";
import User from '../components/user';


export default function Home(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <SearchBar />
          </Card>
        </Col>      
        <Col>
          <User />
        </Col>
      </Row>
      
    </Container>




  )
}