import { ButtonType } from '@/types/ButtontType'
import React, { FC } from 'react'

const Button: FC<ButtonType> = ({icon, iconPosition, title, type, extraClass, variant}) => {
  return (
    <button type={type} className={`cursor-pointer py-[18px] px-[30px] border-[2px] ${variant == "outlined" ? "border-[#A259FF]" : "border-transparent bg-[#A259FF]"}  text-white rounded-[20px] font-semibold text-[16px] flex items-center gap-3 ${extraClass}`} >
        {iconPosition == "left" && icon}
        {title}
        {iconPosition == "right" && icon}
    </button>
  )
}

export default Button