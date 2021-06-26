import axios from "axios"


export default function AddData(book) {
    return axios({
        method: "POST",
        url: `/api/books`,
        data: book,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
        .then(response => {
            console.log(response);
            book.updateBooksCallback(book);
            // let data = response.data.items;
            // return data;
        })

}