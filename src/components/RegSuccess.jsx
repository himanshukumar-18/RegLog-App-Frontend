import React from 'react'

const RegSuccess = ({message}) => {
    return (
        <>
            <div className='successCard'>
                <div className='bg-[#F9FAFB] rounded-lg flex items-center justify-center shadow-md success'>
                    <p className='messtext text-[#10B981] font-semibold text-[18px]'>{message}</p>
                </div>
            </div>
        </>
    )
}

export default RegSuccess