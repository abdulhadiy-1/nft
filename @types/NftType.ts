import { ArtistType } from "./ArtistType";
import { AuctionType } from "./AuctionType";

export interface NftType {
  id: string;
  title: string;
  image: string;
  price: string;
  highestBid: null | number;
  createdAt: string;
  updatedAt: string;
  creatorId: string;
  ownerId: string;
  creator: ArtistType
  owner: ArtistType;
  auctions: AuctionType[];
}
