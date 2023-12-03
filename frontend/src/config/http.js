import axios from "axios";
import { loggedInData } from "./authData";

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_VERSION}`,
  headers: {
    Authorization: `Bearer ${loggedInData?.token}`,
  },
});

export default http;
