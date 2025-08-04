import React, { useState } from 'react'
import './App.css'
import { Nav, Footer, Register, Login } from "./index"
import { useDispatch } from 'react-redux';
import { setUserFromToken } from './features/login/LoginSlice.js';
import { jwtDecode } from 'jwt-decode';

function App() {

  const dispatch = useDispatch();

  const [regOn, setRegOn] = useState(false);
  const [logOn, setLogOn] = useState(false);


  const regHandler = () => {
    setRegOn((prev) => !prev)
    setLogOn(false)
  }

  const logHandler = () => {
    setLogOn((prev) => !prev)
    setRegOn(false)
  }

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        dispatch(setUserFromToken(decodedUser));
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, [dispatch]);

  return (
    <>
      <Nav regOnClick={regHandler} logOnClick={logHandler} />
      <main className='h-[88vh]'>
        <div className='w-full h-full flex items-center justify-center'>
          <div>
            <div>
              {
                regOn && (
                  <Register logOnClickReg={logHandler} />
                )
              }
            </div>

            <div>
              {
                logOn && (
                  <Login />
                )
              }
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
