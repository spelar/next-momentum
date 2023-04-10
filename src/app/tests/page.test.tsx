import { render, screen } from "@testing-library/react";
import Home from "../page";
import InjectMockProviders from "@/test/InjectMockProviders";
import { useInView } from "react-intersection-observer";

jest.mock("react-intersection-observer");
(useInView as jest.Mock).mockImplementation(() => ({ inView: false }));

describe("Home", () => {
  it("Home이 렌더링 돼야 한다", () => {
    render(
      <InjectMockProviders>
        <Home />
      </InjectMockProviders>
    );
  });
});
