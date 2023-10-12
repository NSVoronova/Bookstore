import axios from "axios";

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  timeout: 5000, 
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});


export default instance;