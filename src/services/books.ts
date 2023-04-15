import { axiosInstance } from "@/axiosInstance";
import { BookResponse } from "@/types/books";

export const getBooks = async (
  query: string | null,
  page: number
): Promise<BookResponse> => {
  const { data } = await axiosInstance.get(
    `/v3/search/book?query=${query}&page=${page}`
  );
  return data;
};
