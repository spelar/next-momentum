import { render } from "@testing-library/react";
import List from "../list";
import { bookInfiniteQueryData } from "@/fixtures/bookInfiniteQueryData";

describe("List", () => {
  it("책리스트가 렌더링 되야 한다", () => {
    const { getByText } = render(<List data={bookInfiniteQueryData} />);
    expect(
      getByText("HTML5 + CSS3 + Javascript 웹 프로그래밍")
    ).toBeInTheDocument();
    expect(
      getByText("JavaScript + jQuery 입문(모던 웹을 위한)(3판)")
    ).toBeInTheDocument();
  });
});
