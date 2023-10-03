import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:80/api/",
    headers: {
        "content-type": "application/json"
    },
});

export default instance;

