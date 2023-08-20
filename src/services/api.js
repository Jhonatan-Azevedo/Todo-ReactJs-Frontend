import axios from "axios";

console.log(process.env.REACT_APP_URL_API);
const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
});

export default api;
