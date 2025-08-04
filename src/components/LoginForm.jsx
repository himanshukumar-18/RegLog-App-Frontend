import React from 'react';
// import { axios } from "../index"
import { RegSuccess, Failed } from "../index"
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/login/LoginSlice.js';

const LoginForm = () => {

  const dispatch = useDispatch();
  const { loading, error, user, token } = useSelector((state) => state.login)

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);

  /*
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Perform login logic here, e.g., send a request to the server
      try {
        const response = await axios.post('/login', { email, password });
        if (response.data.success) {
          // Handle successful login (e.g., redirect or show success message)
          console.log("Login successful:", response.data);
        } else {
          // Handle login failure (e.g., show error message)
          console.error("Login failed:", response.data.message);
        }
  
        localStorage.setItem("token", response.data.token);
  
        setEmail("");
        setPassword("");
  
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 1500);
      } catch (error) {
        // Handle error (e.g., show error message)
        console.error("Error during login:", error);
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, 1500);
      }
  
    }
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
  }

  React.useEffect(() => {
    if (user || token) {
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 1500);

    }
  }, [user, token]);

  React.useEffect(() => {
    if (error) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 1500);
    } else {
      setErrorMessage(false);
    }
  }, [error]);

  return (
    <>
      <div>
        {successMessage && <RegSuccess message="Login Successful!" />}
        {errorMessage && <Failed message="Login Failed!" />}
      </div>

      <form className="form duration-150" onSubmit={handleSubmit}>
        <p className="title">Login</p>
        <p className="message">Login now and get full access to our app. </p>
        <label>
          <input
            required
            placeholder='Email'
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            required
            placeholder='Password'
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit' className="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default LoginForm;
