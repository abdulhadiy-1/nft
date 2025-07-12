"use client";
import { ArtistType } from "@/@types/ArtistType";
import { AuctionType } from "@/@types/AuctionType";
import { NftType } from "@/@types/NftType";
import { RocketIcon } from "@/assets/icons";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Total from "@/components/Total";
import { API } from "@/hooks/getApi";
import { getQueryData } from "@/lib/getQueryData";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero({ auctions, artists, auctionsResults, nft }: { auctions: AuctionType[], artists: ArtistType[], auctionsResults: any[], nft: NftType[] }) {
  const t = useTranslations("HeroContent");
  const {data: auctionList, isLoading: auctionLoading} = getQueryData("/auctions", auctions, 'auctions')
  const {data: auctionResultList, isLoading: auctionResultLoading} = getQueryData("/auction-results", auctionsResults, 'auctions-results')
  const {data: artistList, isLoading: artistLoading} = getQueryData("/user?role=ARTIST", artists, 'artists')
  const {data: nftList, isLoading: nftLoading} = getQueryData("/nfts?limit=1", nft, 'nfts')

  console.log(auctionResultList);
  
  return (
    <section className="containers flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-start !my-[80px] px-[72px] lg:px-0">
      <div className="w-full md:max-w-[330px] lg:max-w-[490px] space-y-[30px]">
        <div className="space-y-[20px]">
          <Heading classList="!text-[38px] lg:!text-[67px] !leading-[120%] lg:!leading-[110.00000000000001%] line-clamp-3">
            {t("item1")}
          </Heading>
          <p className="leading-[160%] text-[16px] lg:text-[22px]">
            {t("item2")}
          </p>
        </div>
        <Button
          type="button"
          title={t("button")}
          variant="filled"
          icon={<RocketIcon color="white"/>}
          iconPosition="left"
          extraClass="!w-full justify-center md:!w-auto"
        />
        <div className="flex items-center justify-between">
          <Total title={t("total-sale")} count={auctionResultLoading ? "0" : `${auctionResultList.meta.total}+`} />
          <Total title={t("auctions")} count={auctionLoading ? "0" : `${auctionList.meta.total}+`} />
          <Total title={t("artists")} count={artistLoading ? "0" : `${artistList.meta.total}+`} />
        </div>
      </div>
      <div className="w-full md:w-[330px] lg:w-[510px] bg-[#3B3B3B] rounded-[20px] overflow-hidden">
        <Image
          className="object-cover w-full md:w-[330px] lg:w-[510px] h-full md:h-[221px] lg:h-[401px]"
          src={`${API}/file/${nftList.data[0].image}`}
          alt="hero image"
          width={510}
          height={401}
          priority
        />
        <div className="py-[22px] px-[20px] space-y-[10px]">
          <Heading classList="!text-[22px]">{nftList.data[0].title}</Heading>
          <div className="flex gap-[12px]">
            <Image
              className="w-[24px] h-[24px] rounded-full"
              src={`${API}/file/${nftList.data[0].creator.image}`}
              alt="Animakid"
              width={24}
              height={24}
              priority
            />
            <Text classList="!text-[white]">{nftList.data[0].creator.username}</Text>
          </div>
        </div>
      </div>
    </section>
  );
}
