"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Header from "./common/header";
import useFetchBooks from "@/hooks/useFetchBooks";
import { queryClient } from "../ReactQuery";
import { queryKeys } from "@/react-query/constants";
import { ToastContainer, toast } from "react-toastify";
import { useInView } from "react-intersection-observer";
import React from "react";
import SkeletonElement from "./common/skeletonElement";
import List from "./common/list";

export default function Book() {
  const [inputValue, setInputValue] = useState<string>("");
  const { ref, inView } = useInView({ threshold: 0.3 });
  const {
    data,
    refetch: getBooks,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    error,
    isError,
  } = useFetchBooks(inputValue);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSearchClick = () => {
    queryClient.resetQueries([queryKeys.books]);
    getBooks();
  };

  if (isError && error) {
    toast.error(error.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <BookWrapper>
      <Header
        onInputChange={onInputChange}
        inputValue={inputValue}
        onSearchClick={onSearchClick}
      />
      {data && <List data={data} />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div>
        <div>
          <span ref={ref}></span>
        </div>
        <div>
          {isFetching && isFetchingNextPage ? <SkeletonElement /> : null}
        </div>
      </div>
    </BookWrapper>
  );
}

const BookWrapper = styled.div`
  margin: 0 auto;
  max-width: 768px;
`;
