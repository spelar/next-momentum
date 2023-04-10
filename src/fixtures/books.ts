import { InfiniteQueryResponse } from "@/types/books";

export const bookData: InfiniteQueryResponse = {
  pageParams: [[1, 2]],
  pages: [
    {
      documents: [
        {
          authors: ["황기태"],
          contents:
            "만들고, CSS3로 모양을 꾸미고, 자바스크립트로 사용자 인터페이스나 응용프로그램을 작성하는 과정으로 이루어진다. 이 세 가지 지식이 모두 필요하므로 웹 프로그래밍은 쉬운 것 같으면서도 어려운 분야이다. [HTML5 + CSS3 + Javascript 웹 프로그래밍]은 HTML5 기술을 제대로 전달하기 위해 HTML5 태그, CSS3, 자바스크립트를 모두 아우르도록 내용을 구성하고, 특히 자바스크립트 API로 HTML5 웹 응용프로그램을 작성하는 지식을 예제",
          datetime: "2017-01-16T00:00:00.000+09:00",
          isbn: "8970508880 9788970508887",
          price: 28000,
          publisher: "생능출판",
          sale_price: 27160,
          status: "정상판매",
          thumbnail:
            "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F961292%3Ftimestamp%3D20230310155338",
          title: "HTML5 + CSS3 + Javascript 웹 프로그래밍",
          translators: [],
          url: "https://search.daum.net/search?w=bookpage&bookId=961292&q=HTML5+%2B+CSS3+%2B+Javascript+%EC%9B%B9+%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D",
        },
        {
          authors: ["윤인성"],
          contents:
            "『모던 웹을 위한 JavaScript + jQuery 입문』은 클라이언트 자바스크립트와 관련된 거의 모든 내용을 다루며, 표준 자바스크립트 프레임워크로 채택된 jQuery도 함께 다룬다. 거기서 한걸음 더 나아가 현대적 웹 애플리케이션을 개발하기 위한 Ajax와 jQuery 플러그인까지 소개한다. 책에는 자바스크립트, jQuery, Node.js, Ajax, MySQL 등을 설명하기 위해 700개가 넘는 예제들이 수록되어 있다. 간단한 문법을 살펴보기 위한",
          datetime: "2017-05-01T00:00:00.000+09:00",
          isbn: "8968483558 9788968483554",
          price: 32000,
          publisher: "한빛미디어",
          sale_price: 28800,
          status: "정상판매",
          thumbnail:
            "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F945010%3Ftimestamp%3D20211206153147",
          title: "JavaScript + jQuery 입문(모던 웹을 위한)(3판)",
          translators: [],
          url: "https://search.daum.net/search?w=bookpage&bookId=945010&q=JavaScript+%2B+jQuery+%EC%9E%85%EB%AC%B8%28%EB%AA%A8%EB%8D%98+%EC%9B%B9%EC%9D%84+%EC%9C%84%ED%95%9C%29%283%ED%8C%90%29",
        },
      ],
      meta: {
        is_end: false,
        pageable_count: 1000,
        total_count: 1188,
      },
    },
  ],
};
