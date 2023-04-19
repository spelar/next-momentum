import { render } from "@testing-library/react";
import List from "../list";
import { bookInfiniteQueryData } from "@/fixtures/bookInfiniteQueryData";
import ReactQueryWrapper from "@/test/ReactQueryWrapper";
import given from "given2";

describe("List", () => {
  const renderLit = () =>
    render(
      <ReactQueryWrapper>
        <List data={given.data} />
      </ReactQueryWrapper>
    );

  it("책리스트가 렌더링 되야 한다", () => {
    const { getByText } = render(<List data={bookInfiniteQueryData} />);
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
    const { getByText } = renderLit();
    expect(getByText("검색 결과가 없습니다")).toBeInTheDocument();
  });
});
