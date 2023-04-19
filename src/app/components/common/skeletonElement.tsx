import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import styled from "@emotion/styled";

export default function SkeletonElement() {
  const [skeletonCount] = useState<number[]>([1, 2, 3]);
  return (
    <div
      data-testid="skeleton-element"
      style={{ margin: "0px auto 0", maxWidth: "768px" }}
    >
      {skeletonCount.map((i) => {
        return (
          <div style={{ display: "flex" }} key={`skeleton-${i}`}>
            <ImageWrap>
              <Skeleton height={60} width={"100%"} style={{ marginTop: 10 }} />
            </ImageWrap>
            <TextWrap>
              <Skeleton
                count={2}
                width={"100%"}
                height={20}
                style={{ marginTop: 10 }}
              />
            </TextWrap>
          </div>
        );
      })}
    </div>
  );
}

const ImageWrap = styled.p`
  display: flex;
  flex-direction: column;
  width: 60px;
`;

const TextWrap = styled.p`
  flex: 1;
  margin-top: 5px;
  margin-left: 10px;
`;
