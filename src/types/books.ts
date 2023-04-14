export interface Book {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: unknown[];
  url: string;
}

export interface BookResponse {
  documents: Book[];
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
}

export interface InfiniteQueryResponse {
  pageParams: unknown[];
  pages: BookResponse[];
}

export interface UseFetchBooks {
  data: undefined | BookResponse;
}
