"use client";
import { NftType } from "@/@types/NftType";
import { EyeIcon } from "@/assets/icons";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { API } from "@/hooks/getApi";
import { getQueryData } from "@/lib/getQueryData";
import Image from "next/image";
import React, { FC } from "react";
import { useTranslations } from "use-intl";

const Discover:FC<{nft:NftType[]}> = ({nft}) => {
  const t = useTranslations("DiscoverContent");
    const {data: nftList, isLoading: nftLoading} = getQueryData("/nfts?limit=3", nft, 'nfts')

  return (
    <section className="!my-[80px]">
      <div className="containers">
        <div className="flex justify-between items-center">
          <div className="space-y-[10px]">
            <Heading>{t("item1")}</Heading>
            <p className="text-[22px] mb-[60px]">{t("item2")}</p>
          </div>
          <Button
            icon={<EyeIcon />}
            iconPosition="left"
            title={t("button")}
            type="button"
            variant="outlined"
          />
        </div>
        <div className="flex justify-between items-center gap-[30px]">
            {
                nftList.data.map((item:NftType) => (
                    <div key={item.id} className="overflow-hidden bg-[var(--clr-grey)] rounded-[20px] space-y-[20px]">
                        <Image src={`${API}/file/${item.image}`} alt="image" width={330} height={296} priority className="w-[330px] h-[296px]"/>
                        <div className="space-y-[5px] px-[30px] pb-[25px]">
                            <Heading classList="!text-[22px]">{item.title}</Heading>
                            <div className="flex gap-[12px] mb-[25px]">
                                <Image src={`${API}/file/${item.creator.image}`} alt="creator image" width={24} height={24} priority className="w-[24px] h-[24px]"/>
                                <p>{item.creator.username}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-[8px]">
                                    <Text classList="!text-[12px]">price</Text>
                                    <p>{item.price} ETH</p>
                                </div>
                                <div className="space-y-[8px]">
                                    <Text classList="!text-[12px]">Highest Bid</Text>
                                    <p>{item.highestBid ? item.highestBid : "0" } wETH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
      <Image src={`/mushroom.png`} alt="mushroom" width={1280} height={660} className="w-full h-auto mt-[80px]" priority/>
    </section>
  );
};

export default Discover;
