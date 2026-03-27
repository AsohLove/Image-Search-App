import { useQuery } from "@tanstack/react-query";
import { fetchImages } from "../api/fetchImages";

export const useImages = (query: string, page: number) => {
  return useQuery({
    queryKey: ["images", query, page],
    queryFn: () => fetchImages(query, page),
    enabled: !!query,
  });
};