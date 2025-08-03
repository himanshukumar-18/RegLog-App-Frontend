import React from 'react'

const Failed = ({ message }) => {


  return (
    <>
      <div className='successCard'>
        <div className='successCard'>
          <div className='bg-[#F9FAFB] rounded-lg flex items-center justify-center shadow-md success'>
            <p className='messtext text-[#F43F5E] font-semibold text-[18px]'>{message}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Failed