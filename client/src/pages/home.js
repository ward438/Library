
import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "../components/searchBar";
import User from '../components/user';
import GetUserBooks from "../utils/getUserBooks";


export default function Home(props) {

  const [books, setBooks] = useState([]);

  const updateUserBooks = (book) => {
    setBooks(books => [...books, book]);
  }
  useEffect(() => {
    return GetUserBooks().then(books => setBooks(books));
  }, []);


  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <SearchBar updateBooksCallback={(book) => updateUserBooks(book)} />
          </Card>
        </Col>
        <Col>
          <User books={books} />
        </Col>
      </Row>
    </Container>
  )
}