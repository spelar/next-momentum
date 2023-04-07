import ReactQuery from "@/app/ReactQuery";
import React, { ComponentProps, ReactElement, ReactNode, useMemo } from "react";

type Props = {
  children: ReactNode;
};

function InjectMockProviders({ children }: Props): ReactElement {
  return <ReactQuery>{children}</ReactQuery>;
}

export default InjectMockProviders;
