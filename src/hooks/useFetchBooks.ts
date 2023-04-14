import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "./../react-query/constants";
import { BookResponse } from "@/types/books";
import { BookResponseError } from "@/types/error";
import { getBooks } from "@/services/books";

function useFetchBooks(query: string) {
  const {
    data,
    refetch,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    isError,
    error,
    isSuccess,
  } = useInfiniteQuery<BookResponse, BookResponseError>(
    [queryKeys.books, { query }],
    ({ pageParam = 1 }) => getBooks(query ? query : null, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage && lastPage.meta && lastPage.meta.total_count) {
          const maxPage = lastPage.meta.total_count / 10;
          const nextPage = allPages.length + 1;
          return nextPage <= maxPage ? nextPage : undefined;
        }
        return undefined;
      },
      retry: false,
      enabled: false,
      suspense: true,
    }
  );

  return {
    data,
    refetch,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    isError,
    error,
    isSuccess,
  };
}

export default useFetchBooks;
