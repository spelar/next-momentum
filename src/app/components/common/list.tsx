import React from "react";
import styled from "@emotion/styled";
import { BookResponse, InfiniteQueryResponse } from "@/types/books";
import Link from "next/link";

interface ListProps {
  data: InfiniteQueryResponse;
}

export default function List({ data }: ListProps) {
  return (
    <ListWrapper>
      <div>
        {data?.pages.map((page: BookResponse, i: number) => (
          <div className="itemWrapper" key={`book + ${i}`}>
            {page.documents.map((item) => (
              <Link href={item.url} target="_blank">
                <div className="item" key={item.isbn + i}>
                  <div className="itemInner">
                    <div className="image">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={item.title + `책 이미지`}
                        />
                      ) : (
                        <div className="image noimage">
                          <span />
                        </div>
                      )}
                    </div>
                    <div className="info">
                      <h2>{item.title}</h2>
                      <div className="priceWrap">
                        <span className="price">
                          {item.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                      </div>
                      <div className="person">{item.authors}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  width: 100%;
  .itemWrapper {
    padding: 10px;
    .item {
      .itemInner {
        width: 100%;
        min-height: 66px;
        display: table;
        padding: 10px;
        border-bottom: 1px solid #e6e6e6;
        box-sizing: border-box;
        .image {
          float: left;
          position: relative;
          min-width: 60px;
          min-height: 87px;
          img {
            width: 100%;
          }
        }
        .noimage {
          background-color: #ececec;
          span {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 26px;
            height: 24px;
            margin-top: -12px;
            margin-left: -13px;
          }
        }
        .info {
          display: table-cell;
          width: 92%;
          padding-left: 15px;
          overflow: hidden;
          h2 {
            display: inline;
            margin: 3px 3px 5px 0px;
          }
          .priceWrap {
            .price {
              font-size: 13px;
            }
          }
          .person {
            margin-top: 4px;
          }
        }
      }
    }
  }
`;
