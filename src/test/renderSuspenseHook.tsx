import { renderHook } from "@testing-library/react";
import ReactQueryWrapper from "./ReactQueryWrapper";

const renderSuspenseHook = <T, K>(render: (initialProps: K) => T) =>
  renderHook<T, K>(render, {
    wrapper: ({ children }) => (
      <ReactQueryWrapper>{children}</ReactQueryWrapper>
    ),
  });

export default renderSuspenseHook;
