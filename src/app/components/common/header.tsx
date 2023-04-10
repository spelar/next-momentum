import React from "react";

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
      <div className="search">
        <label htmlFor="searchInput">검색어 입력</label>
        <input
          id="searchInput"
          type="text"
          className="input"
          title="검색어 입력"
          placeholder="책을 검색해 보세요."
          onChange={onInputChange}
          value={inputValue}
        />
        <button className="btnSearch" onClick={onSearchClick}>
          검색
        </button>
      </div>
    </React.Fragment>
  );
}
