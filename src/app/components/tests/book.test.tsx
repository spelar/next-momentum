import { fireEvent, render, screen } from "@testing-library/react";
import { useInView } from "react-intersection-observer";
import given from "given2";
import useFetchBooks from "@/hooks/useFetchBooks";
import { bookInfiniteQueryData } from "@/fixtures/bookInfiniteQueryData";
import Book from "../book";
import { queryKeys } from "@/react-query/constants";
import ReactQueryWrapper from "@/test/ReactQueryWrapper";
import { toast } from "react-toastify";
import { queryClient } from "@/app/ReactQuery";
import Header from "../common/header";

const mockedUseFetchBooksQuery = useFetchBooks as jest.Mock;

jest.mock("../../../hooks/useFetchBooks");

describe("Book", () => {
  const handleFetchNextPage = jest.fn();
  const mockHandleGetBook = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseFetchBooksQuery.mockImplementation(() => ({
      data: given.data,
      hasNextPage: given.hasNextPage,
      fetchNextPage: handleFetchNextPage,
      isFetching: given.isFetching,
      isFetchingNextPage: given.isFetchingNextPage,
      isError: given.isError,
      error: given.error,
      refetch: mockHandleGetBook,
    }));
    (useInView as jest.Mock).mockImplementation(() => ({
      ref: jest.fn(),
      inView: given.inView,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderBook = () =>
    render(
      <ReactQueryWrapper>
        <Book />
      </ReactQueryWrapper>
    );

  it("Input 값이 변경되어야 한다", () => {
    const { getByPlaceholderText } = renderBook();
    const input = getByPlaceholderText(
      "책을 검색해 보세요."
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "python" } });
    expect(input.value).toBe("python");
  });

  it("검색 버튼이 클릭 되어야 한다", () => {
    const resetQueriesSpy = jest.spyOn(queryClient, "resetQueries");

    const { getByRole, getByPlaceholderText } = renderBook();
    const input = getByPlaceholderText(
      "책을 검색해 보세요."
    ) as HTMLInputElement;
    const button = getByRole("button") as HTMLButtonElement;

    fireEvent.change(input, { target: { value: "python" } });
    fireEvent.click(button);

    expect(resetQueriesSpy).toHaveBeenCalledWith([queryKeys.books]);
    expect(mockHandleGetBook).toHaveBeenCalled();

    resetQueriesSpy.mockRestore();
  });

  it("fetchNextPage가 호출되어야 한다", () => {
    given("inView", () => true);
    given("hasNextPage", () => true);
    renderBook();

    expect(handleFetchNextPage).toBeCalledTimes(1);
  });

  it("책리스트가 렌더링 되야 한다", () => {
    given("data", () => bookInfiniteQueryData);
    const { getByText } = renderBook();
    expect(
      getByText("HTML5 + CSS3 + Javascript 웹 프로그래밍")
    ).toBeInTheDocument();
    expect(
      getByText("JavaScript + jQuery 입문(모던 웹을 위한)(3판)")
    ).toBeInTheDocument();
  });

  it("검색 결과가 없는 경우 '검색 결과가 없습니다' 문구가 표시되어야 한다", () => {
    const emptyData = { pages: [{ documents: [] }] };
    given("data", () => emptyData);
    const { getByText } = renderBook();
    expect(getByText("검색 결과가 없습니다")).toBeInTheDocument();
  });

  it("error message가 보여져야 한다", () => {
    jest.spyOn(toast, "error");
    given("isError", () => true);
    given("error", () => ({
      response: { data: { message: "error message" } },
    }));
    renderBook();

    expect(toast.error).toHaveBeenCalledWith("error message", {
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: "top-right",
      progress: undefined,
      theme: "light",
    });
  });

  it("isFetching과 isFetchingNextPage이 true일때 스켈레톤이 보여져야 한다", () => {
    given("isFetching", () => true);
    given("isFetchingNextPage", () => true);
    given("data", () => bookInfiniteQueryData);
    renderBook();

    expect(screen.getByTestId("skeleton-element")).toBeInTheDocument();
  });

  it("data가 없고, isFetching이 true일때 스켈레톤이 보여져야 한다", () => {
    given("isFetching", () => true);
    given("data", () => false);
    renderBook();

    expect(screen.getByTestId("skeleton-element")).toBeInTheDocument();
  });
});
