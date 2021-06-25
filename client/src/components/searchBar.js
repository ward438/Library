import React, { useState, useEffect } from "react";
import { Card, Form, Navbar, Button, FormControl } from 'react-bootstrap';
// import { SearchField, onEnter } from "react-search-field";



export default function ResultsCard() {
    return <React.Fragment>
        test apicall.js and callCard.js // text on apiCall.js
        <Navbar>
            <Form inline>
                <FormControl type="text" placeholder="Google Books Search" className="mr-sm-2" />
                {/* <Button variant="outline-success" href="/searchResults">Search</Button> */}
                <Button variant="outline-success" href="/searchResults">Search</Button>
            </Form>
        </Navbar>


    </React.Fragment>


}
