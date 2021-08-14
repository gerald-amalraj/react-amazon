import axios from "axios";

export default axios.create({
  baseURL: "http://3.7.39.76:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});