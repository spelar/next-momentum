import { bookInfiniteQueryData } from "@/fixtures/bookInfiniteQueryData";
import useFetchBooks from "../useFetchBooks";
import { waitFor } from "@testing-library/react";
import renderSuspenseHook from "@/test/renderSuspenseHook";
import { getBooks } from "./../../services/books";

jest.mock("./../../services/books");

describe("useInfiniteQuery", () => {
  let query = "javacript";

  beforeEach(() => {
    jest.clearAllMocks();

    (getBooks as jest.Mock).mockImplementation(() => bookInfiniteQueryData);
  });

  it("book에 대한 정보를 반환해야만 한다", async () => {
    const { result } = renderSuspenseHook(() => useFetchBooks(query));

    result.current.refetch();

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data?.pages).toEqual([bookInfiniteQueryData]);
  });
});
