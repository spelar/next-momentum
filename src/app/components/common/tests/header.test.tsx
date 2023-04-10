import { render, fireEvent } from "@testing-library/react";
import Header from "../header";

describe("Header", () => {
  const onInputChange = jest.fn();
  const onSearchClick = jest.fn();
  const inputValue = "javascript";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderHeader = () =>
    render(
      <Header
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
        inputValue={inputValue}
      />
    );

  it("input과, 버튼이 렌더링 되야 한다", () => {
    const { getByPlaceholderText, getByRole } = renderHeader();
    const input = getByPlaceholderText(
      "책을 검색해 보세요."
    ) as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input.value).toBe(inputValue);

    const button = getByRole("button", { name: "검색" });
    expect(button).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "typescript" } });
    expect(onInputChange).toHaveBeenCalled();

    fireEvent.click(button);
    expect(onSearchClick).toHaveBeenCalled();
  });
});
