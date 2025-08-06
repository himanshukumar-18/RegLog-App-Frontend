import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/login/LoginSlice';
import { RegSuccess, Failed } from '../index';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error, user, token } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (user && token) {
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 1500);
      setEmail("");
      setPassword("");
    }
  }, [user, token]);

  useEffect(() => {
    if (error) {
      setErrorMessage(true);
      setTimeout(() => setErrorMessage(false), 1500);
    }
  }, [error]);

  return (
    <>
      {successMessage && <RegSuccess message="Login Successful!" />}
      {errorMessage && <Failed message="Login Failed!" />}

      <form className="form duration-150" onSubmit={handleSubmit}>
        <p className="title">Login</p>
        <p className="message">Login now and get full access to our app.</p>

        <label>
          <input
            type="email"
            placeholder="Email"
            required
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="Password"
            required
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" className="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      <div className="text-center mt-4">
        {token ? (
          <p className="text-green-500">You are logged in as {user?.name}</p>
        ) : (
          <p className="text-red-500">You are not logged in</p>
        )}
      </div>
    </>
  );
};

export default LoginForm;
