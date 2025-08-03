import React from 'react';
import { axios } from "../index"
import { RegSuccess, Failed } from "../index"

const LoginForm = () => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);


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
      setSuccessMessage(true);
      setErrorMessage(false);
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error("Error during login:", error);
      setSuccessMessage(false);
      setErrorMessage(true);
    }

  }

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
        <button type='submit' className="submit">Submit</button>
      </form>
    </>
  );
}

export default LoginForm;
