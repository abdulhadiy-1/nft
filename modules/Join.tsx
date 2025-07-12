import { MessageIcon } from '@/assets/icons'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Input from '@/components/Input'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Join = () => {
    const t = useTranslations("JoinContent")
  return (
    <section className='!my-[80px] containers'>
        <div className='flex items-center p-[60px] justify-between rounded-[20px] bg-[var(--clr-grey)]'>
            <Image src={"/spaceMan.png"} alt='spaceMan' width={425} height={310} priority className='w-[425px] h-[310px] rounded-[20px]'/>
            <div className="max-w-[425px] space-y-[10px]">
                <Heading>{t("item1")}</Heading>
                <p className='text-[22px]'>{t("item2")}</p>
                <div className="flex bg-white justify-between rounded-[20px] mt-[30px]"><Input type='email' placeholder={t("inp-item")}/> <Button title={t("button")} type='button' variant='filled' icon={<MessageIcon />} iconPosition='left'/></div>
            </div>
        </div>
    </section>
  )
}

export default Join