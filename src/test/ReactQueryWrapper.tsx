import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  Suspense,
} from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SkeletonElement from "@/app/components/common/skeletonElement";

interface Props {
  suspense?: boolean;
  children: ReactNode;
}

function ReactQueryWrapper({
  children,
}: PropsWithChildren<Props>): ReactElement {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        useErrorBoundary: false,
        suspense: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryWrapper;
