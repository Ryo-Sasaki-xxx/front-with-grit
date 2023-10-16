import axios from "axios";

const instance = axios.create({
    baseURL: "http://with-grit.net/api/",
    headers: {
        "content-type": "application/json"
    },
});

export default instance;

