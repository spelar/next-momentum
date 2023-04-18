import React from "react";
import styled from "@emotion/styled";
import { BookResponse, InfiniteQueryResponse } from "@/types/books";
import Link from "next/link";
import Image from "next/image";

interface ListProps {
  data: InfiniteQueryResponse;
}

export default function List({ data }: ListProps) {
  return (
    <ListWrapper>
      <div className="itemWrapper">
        {data?.pages.map((page: BookResponse) =>
          page.documents.map((item, i) => (
            <Link href={item.url} target="_blank" key={item.isbn + i}>
              <div className="item">
                <div className="itemInner">
                  <div className="image">
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail}
                        width={60}
                        height={87}
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
          ))
        )}
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
          img {
            width: auto;
            height: auto;
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
