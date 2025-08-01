import React from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  return (
    <StyledWrapper>
      <form className="form duration-150">
        <p className="title">Login</p>
        <p className="message">Login now and get full access to our app. </p>
        <label>
          <input required placeholder type="email" className="input" />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" />
          <span>Password</span>
        </label>
        <button className="submit">Submit</button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #6366F1;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color: #CBD5E1;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #0F172A;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: #0F172A;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message, .signin {
    color: #CBD5E1;
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: #0F172A;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid #F9FAFB;
    border-radius: 10px;
    color: #F9FAFB;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: #CBD5E1;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: #F9FAFB;
  }

  .submit {
    border: none;
    outline: none;
    background-color: #0F172A;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;

export default LoginForm;
