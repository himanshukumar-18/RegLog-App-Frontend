import axios from "axios";

const base = import.meta.env.VITE_API_PROXY;

const instance = axios.create({
    baseURL: base,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export default instance