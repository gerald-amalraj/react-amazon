import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-15-206-211-103.ap-south-1.compute.amazonaws.com:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});