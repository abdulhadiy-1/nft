import React, { ReactNode } from 'react'

const Heading = ({children, classList}: {children: ReactNode, classList?: string}) => {
  return (
    <h2 className={`font-semibold text-[38px] ${classList}`}>{children}</h2>
  )
}

export default Heading