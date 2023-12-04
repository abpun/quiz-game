import axios from "axios";
import { useSelector } from "react-redux";

const user = useSelector((state) => state.user);

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_VERSION}`,
});

const setAuthToken = (token) => {
  if (token) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete http.defaults.headers.common["Authorization"];
  }
};

// Set initial token if available
setAuthToken(user?.token);

export default http;
export { http, setAuthToken };
