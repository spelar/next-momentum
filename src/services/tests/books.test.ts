import { getBooks } from "../books";
import { bookApiData } from "./../../fixtures/bookApiData";

jest.mock("../books");

describe("books API", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (getBooks as jest.Mock).mockReturnValueOnce(bookApiData);
  });
  it("책 리스트가 반환되어야 한다", async () => {
    const response = await getBooks("javascript", 1);
    expect(response).toEqual(bookApiData);
  });
});
