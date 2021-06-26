import axios from "axios"


export default function GetUserBooks() {
    return axios({
        method: "GET",
        url: `/api/books`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        }
    })
        .then(response => {
            console.log(response);            
            let data = response.data;
            return data;
        })
    return

}