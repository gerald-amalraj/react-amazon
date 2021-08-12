import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-13-126-235-222.ap-south-1.compute.amazonaws.com:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});