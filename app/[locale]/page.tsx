import Collections from '@/modules/Collections'
import Hero from '@/modules/Hero'
import { getRequest } from '@/service/getRequest'
import React from 'react'

export default async function Home()  {
  const auctions = await getRequest("/auctions")
  const auctionsResults = await getRequest("/auction-results")
  const artists = await getRequest("/user?role=ARTIST")
  const nft = await getRequest("/nfts?limit=1")
  const collections = await getRequest("/collections?limit=3")

  return (
    <>
      <Hero auctions={auctions} artists={artists} auctionsResults={auctionsResults} nft={nft}/>
      <Collections collections={collections}/>

    </>
  )
}
