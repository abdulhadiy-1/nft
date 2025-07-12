import Categories from "@/modules/Categories";
import Collections from "@/modules/Collections";
import Creators from "@/modules/Creators";
import Discover from "@/modules/Discover";
import Hero from "@/modules/Hero";
import Join from "@/modules/Join";
import Learning from "@/modules/Learning";
import { getRequest } from "@/service/getRequest";
import React from "react";

export default async function Home() {
  const auctions = await getRequest("/auctions");
  const auctionsResults = await getRequest("/auction-results");
  const artists = await getRequest("/user?role=ARTIST");
  const nft = await getRequest("/nfts?limit=3");
  const collections = await getRequest("/collections?limit=3");
  const categories = await getRequest("/categories");

  return (
    <>
      <Hero
        auctions={auctions}
        artists={artists}
        auctionsResults={auctionsResults}
        nft={nft}
      />
      <Collections collections={collections} />
      <Creators artists={artists} />
      <Categories categories={categories} />
      <Discover nft={nft} />
      <Learning />
      <Join />
    </>
  );
}
