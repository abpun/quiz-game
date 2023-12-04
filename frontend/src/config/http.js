// axios instance
const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_VERSION}`,
});

// Function to set Authorization header before each request
const setAuthToken = (token) => {
  if (token) {
    // Apply the token to the Authorization header
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // If no token is provided, remove Authorization header
    delete http.defaults.headers.common["Authorization"];
  }
};

// Set initial token if available
setAuthToken(loggedInData?.token);

export { http, setAuthToken };
