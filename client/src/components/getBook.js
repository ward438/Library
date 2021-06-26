import axios from "axios";


export default function ReturnBooks(query) {
   
    return axios({
        method: "GET",
        url: `/api/books`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
        .then(response => {
            console.log(response.data);
            // console.log(response.data.items[0].volumeInfo.description);
            let data = response.data;
            return data;
        })

}


