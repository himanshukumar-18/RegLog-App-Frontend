import React, { useState } from 'react';
import { axios } from '../index';
import { RegSuccess } from "../index"

const RigesterForm = ({ logOnClickReg }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handelSubmit = async () => {

    try {

      const data = await axios.post("/register", { name, email, password })
      console.log("🤩 Register successful : ", data)

      // ✅ Clear input fields after successful registration
      setName("");
      setEmail("");
      setPassword("");

      const apper = setTimeout(() => {
        setSuccess(true);
      }, 500);

      setTimeout(() => {
        clearTimeout(apper);
      }, 1000);

    } catch (error) {
      console.error("Error Fetching Data: ", error)
    }

  }


  return (
    <>
      <div>
        {
          success && (
            <RegSuccess />
          )
        }
      </div>

      <div className='form-wrapper'>
        <form action={handelSubmit} className="form duration-150">
          <p className="title">Register</p>
          <p className="message">Signup now and get full access to our app. </p>

          <label>
            <input
              required
              placeholder='Fullname'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="input"
            />
          </label>

          <label>
            <input
              required
              value={email}
              placeholder='Email Address'
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="input"
            />

          </label>

          <label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="input"
              placeholder='Password'
            />
          </label>

          <button type='submit' className="submit">Submit</button>
          <p className="signin">Already have an acount ? <button onClick={logOnClickReg} className='text-[#0F172A] hover:underline duration-100 font-semibold cursor-pointer'>Login</button> </p>
        </form>
      </div>
    </>
  );
}


export default RigesterForm;
