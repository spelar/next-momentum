import { render } from "@testing-library/react";
import List from "../list";
import { bookData } from "@/fixtures/books";

describe("List component", () => {
  it("should render a list of books", () => {
    const { getByText } = render(<List data={bookData} />);
    expect(
      getByText("HTML5 + CSS3 + Javascript 웹 프로그래밍")
    ).toBeInTheDocument();
    expect(
      getByText("JavaScript + jQuery 입문(모던 웹을 위한)(3판)")
    ).toBeInTheDocument();
  });
});
