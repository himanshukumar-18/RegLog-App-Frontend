import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logout } from '../features/login/LoginSlice';
import { RegSuccess, Failed } from '../index';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error, user, token, } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
    setEmail("");
    setPassword("");
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
      {errorMessage && <Failed message={error || "Login Failed!"} />}

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

      <div className="text-center mt-10">
        {token && user ? (
          <>
            <div className='text-2xl'>
              <p className="text-[#10B981]">You are logged in as {user?.name}</p>
              <div className='mt-5'>
                <button
                  disabled={loading}
                  type="button"
                  className='bg-[#CBD5E1] text-[#F43F5E] px-4 py-2 rounded cursor-pointer hover:bg-[#F43F5E] hover:text-white transition-colors duration-300'
                  onClick={handleLogout}>{loading ? "Logging out..." : "Logout"}</button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-[#F43F5E] text-2xl">You are not logged in</p>
        )}
      </div>
    </>
  );
};

export default LoginForm;
