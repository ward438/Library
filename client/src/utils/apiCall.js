import 'react-bootstrap';
import axios from "axios";



export default function GetBooks(query) {
    const KEY = 'AIzaSyDfsNpor9FxACWbZPoGa2ZXQOiLCgrqPZM'
    return axios({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${KEY}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
        .then(response => {
            console.log(response.data);
            let data = response.data.items;
            return data;
        })

}

