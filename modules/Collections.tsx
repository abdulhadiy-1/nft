"use client"
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { API } from "@/hooks/getApi";
import { getQueryData } from "@/lib/getQueryData";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Collections = ({collections}: {collections: any[]}) => {
    const t = useTranslations("CollectionContent")
const {data: collectionList, isLoading: collectionLoading} = getQueryData("/collections?limit=3", collections, 'collections')
  return (
    <section>
      <div className="containers !my-[80px]">
        <Heading>{t('item1')}</Heading>
        <p className="text-[22px] mb-[60px]">{t('item2')}</p>
        <div className="flex items-center justify-between flex-wrap">
            {collectionList.data.map((item: any) => (
                <div key={item.id}>
                    <div className="space-y-[15px]">
                            <Image className="w-[330px] h-[330px] rounded-[20px]" width={330} height={330} src={`${API}/file/${item.images[0]}`} alt="a" priority/>
                        <div className="flex justify-between">
                            <Image className="w-[100px] h-[100px] rounded-[20px]" width={100} height={100} src={`${API}/file/${item.images[1]}`} alt="a" priority/>
                            <Image className="w-[100px] h-[100px] rounded-[20px]" width={100} height={100} src={`${API}/file/${item.images[2]}`} alt="a" priority/>
                            <Button extraClass="!text-[22px] !w-[100px] !h-[100px] flex items-center justify-center" type="button" variant="filled"  title="100+"/>
                        </div>
                        <Heading classList="!text-[22px]">{item.title}</Heading>
                        <div className="flex gap-[12px]">
                            <Image className="w-[24px] h-[24px] rounded-full" width={24} height={24} src={`${API}/file/${item.creator.image}`} alt="Animakid"/>
                            <p>{item.creator.username}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
