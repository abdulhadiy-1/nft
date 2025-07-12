import { ArtistType } from "./ArtistType";

export interface CollectionType {
  id: string;
  title: string;
  images: string[];
  price: string;
  highestBid: null | number;
  createdAt: string;
  updatedAt: string;
  creatorId: string;
  creator: ArtistType;
}
