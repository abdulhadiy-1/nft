import { ArtistType } from "@/@types/ArtistType";
import { AuctionType } from "@/@types/AuctionType";
import { CategoryType } from "@/@types/CategoryType";
import { CollectionType } from "@/@types/CollectionType";
import { NftType } from "@/@types/NftType";
import { getRequest } from "@/service/getRequest";
import { useQuery } from "@tanstack/react-query";

export const getQueryData = (url: string, initialData: AuctionType[] | ArtistType[] | CollectionType[] | CategoryType[] | NftType[], queryKey: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey],
    queryFn: () => getRequest(url),
    initialData,
  });

  return {data, isLoading, error}
};

