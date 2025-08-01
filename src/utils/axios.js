import axios from "axios";

const instance = axios.create({
    baseURL: `https://reglog-app-backend.onrender.com/api/v1/users`
})

export default instance