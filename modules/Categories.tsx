'use client'
import { CategoryType } from '@/@types/CategoryType'
import Heading from '@/components/Heading'
import { API } from '@/hooks/getApi'
import { getQueryData } from '@/lib/getQueryData'
import Image from 'next/image'
import React, { FC } from 'react'
import { useTranslations } from 'use-intl'

const Categories:FC<{categories: CategoryType[]}> = ({categories}) => {
    const {data, isLoading} = getQueryData('/categories', categories, 'categories')
    const t = useTranslations("CategoryContent")
  return (
    <section>
        <div className="containers !my-[80px]">
            <Heading>{t("item1")}</Heading>
            <div className="flex mt-[60px] gap-[30px] justify-between flex-wrap">
                {data.data.map((item: CategoryType) => (
                    <div key={item.id} className="overflow-hidden rounded-[20px] bg-[var(--clr-grey)]">
                        <div className="relative overflow-hidden">
                            <Image className='w-[240px] h-[240px]' src={`${API}/file/${item.image}`} width={240} height={240} alt='category image' priority/>
                            <div className="bg-[#ffffff3b] backdrop-blur-md absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center"><Image src={`${API}/file/${item.icon}`} alt='icon' width={100} height={100} priority className='w-[100px] h-[100px] ' /></div>
                        </div>
                        <div className="px-[30px] pt-[20px] pb-[25px]">
                            <Heading classList='!text-[22px]'>{item.name}</Heading>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Categories