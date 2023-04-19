import React from "react";
import styled from "@emotion/styled";

interface HeaderProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  inputValue: string;
}

export default function Header({
  onInputChange,
  onSearchClick,
  inputValue,
}: HeaderProps) {
  return (
    <React.Fragment>
      <HeaderWrapper>
        <Logo>MoMentum</Logo>
        <label htmlFor="searchInput" className="blind">
          검색어 입력
        </label>
        <HeaderSearch>
          <input
            id="searchInput"
            type="text"
            className="input"
            title="검색어 입력"
            placeholder="책을 검색해 보세요."
            onChange={onInputChange}
            value={inputValue}
            autoComplete="off"
          />
          <button className="btnSearch" onClick={onSearchClick}>
            검색
          </button>
        </HeaderSearch>
      </HeaderWrapper>
    </React.Fragment>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #1ab1ff;
`;

const Logo = styled.h1`
  height: 48px;
  padding-left: 15px;
  color: #fff;
  line-height: 48px;
  font-size: 20px;
  font-weight: 700;
  font-family: sans-serif;
`;

const HeaderSearch = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 15px 10px;
  background-color: #1ab1ff;
  box-sizing: border-box;
  input {
    width: 100%;
    height: 42px;
    padding: 0 42px 0px 12px;
    border: 0;
    background-color: #fff;
    font-weight: normal;
    font-size: 17px;
    line-height: 26px;
    color: #000;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
  }
  button {
    position: absolute;
    top: 10px;
    right: 14px;
    width: 42px;
    height: 42px;
    background-color: #e6e6e6;
    border-left: 1px solid #b9b9b9;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
