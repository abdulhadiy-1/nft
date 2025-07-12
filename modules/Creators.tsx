"use client"
import { ArtistType } from "@/@types/ArtistType";
import { RocketIcon } from "@/assets/icons";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { API } from "@/hooks/getApi";
import { getQueryData } from "@/lib/getQueryData";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FC } from "react";

const Creators: FC<{ artists: ArtistType[] }> = ({ artists }) => {
  const { data: creators, isLoading: creatorLoading } = getQueryData(
    "user?role=ARTIST",
    artists,
    "artists"
  );
  const t = useTranslations("CreatorContent");
  return (
    <section>
      <div className="containers !my-[160px]">
        <div className="flex justify-between items-center">
          <div className="">
            <Heading>{t("item1")}</Heading>
            <p className="text-[22px] mb-[60px]">{t("item2")}</p>
          </div>
          <Button
            icon={<RocketIcon color="var(--clr-violet)" />}
            iconPosition="left"
            title={t("button")}
            type="button"
            variant="outlined"
          />
        </div>
        <div className="flex gap-[30px] justify-between flex-wrap mt-[60px]">
          {creators.data.map((item: ArtistType, index: number) => (
            
              <div key={item.id} className="p-5 rounded-[20px] bg-[var(--clr-grey)] relative">
                <Image className="w-[120px] h-[120px] rounded-full mx-auto mb-5" width={120} height={120} src={`${API}/file/${item.image}`}  alt="User Image" priority />
                <div className="space-y-[5px] text-center">
                  <Heading classList="!text-[22px]">{item.username}</Heading>
                <Text classList="!text-[16px]">Total Sales: <span className="text-[white]">34.53 ETH</span></Text>
                </div>
                <button className="absolute top-[18px] left-[20px] w-[30px] h-[30px] flex justify-center items-center bg-[#2B2B2B] rounded-full text-[#858584]">{index + 1}</button>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creators;
