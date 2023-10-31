import axios from "axios";

const http = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_VERSION}`,
    headers: {
        "x-api-key": "W67uHDBIvFA17F53",
    },
});

export default http;
