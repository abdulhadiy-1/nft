import React from 'react'

const Total = ({count, title}: {count: string, title: string}) => {
  return (
    <div>
        <p className='font-bold text-[22px] lg:text-[28px]'>{count}</p>
        <p className='text-[16px] lg:text-[24px]'>{title}</p>
    </div>
  )
}

export default Total