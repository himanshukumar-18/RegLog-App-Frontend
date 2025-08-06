import axios from "axios";

const base = import.meta.env.VITE_API_PROXY
    ? `${import.meta.env.VITE_API_PROXY}/api/v1/users`
    : "http://localhost:3000/api/v1/users";

const instance = axios.create({
    baseURL: base,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

export default instance