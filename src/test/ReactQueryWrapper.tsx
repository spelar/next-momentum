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
        suspense: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<SkeletonElement />}>{children}</Suspense>
    </QueryClientProvider>
  );
}

export default ReactQueryWrapper;
