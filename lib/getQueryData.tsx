import { ArtistType } from "@/@types/ArtistType";
import { AuctionType } from "@/@types/AuctionType";
import { getRequest } from "@/service/getRequest";
import { useQuery } from "@tanstack/react-query";

export const getQueryData = (url: string, initialData: AuctionType[] | ArtistType[] | any, queryKey: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey],
    queryFn: () => getRequest(url),
    initialData,
  });

  return {data, isLoading, error}
};

