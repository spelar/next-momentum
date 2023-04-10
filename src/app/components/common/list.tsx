import React from "react";
import { BookResponse, InfiniteQueryResponse } from "@/types/books";

interface ListProps {
  data: InfiniteQueryResponse;
}

export default function List({ data }: ListProps) {
  return (
    <div>
      <div>
        {data?.pages.map((page: BookResponse, i: number) => (
          <React.Fragment key={`book${i}`}>
            {page.documents.map((project) => (
              <p
                style={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  padding: "10rem 1rem",
                }}
                key={project.isbn + i}
              >
                {project.title}
              </p>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
