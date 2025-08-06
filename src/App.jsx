import React from 'react'
import './App.css'
import { Nav, Footer, Register, Login } from "./index"


function App() {


  const [regOn, setRegOn] = React.useState(false);
  const [logOn, setLogOn] = React.useState(false);


  const regHandler = () => {
    setRegOn((prev) => !prev)
    setLogOn(false)
  }

  const logHandler = () => {
    setLogOn((prev) => !prev)
    setRegOn(false)
  }


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
