import axios from "./utils/axios.js";
import Nav from "./components/header/Nav";
import Footer from "./components/footer/Footer";
import Register from "./components/RegisterForm";
import Login from "./components/LoginForm";
import RegSuccess from "./components/RegSuccess.jsx";
import Failed from "./components/Failed.jsx";
import LoginSlice from "./features/login/LoginSlice.js"
import Store from "./app/Store.js"

export {
    axios,
    Nav,
    Footer,
    Register,
    Login,
    RegSuccess,
    Failed,
    LoginSlice,
    Store
}