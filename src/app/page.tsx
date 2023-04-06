import { Metadata } from "next";
import Book from "./components/book";

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "next-momentum.js",
  title: "책 검색",
  description: "YOUR EVERY STORY 책을 검색해보세요",
};

export default function Home() {
  return <Book />;
}
