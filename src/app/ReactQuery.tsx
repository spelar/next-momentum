"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, Suspense } from "react";
import SkeletonElement from "./components/common/skeletonElement";

type Props = {
  children: ReactNode;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      useErrorBoundary: false,
      suspense: true,
    },
  },
});

export default function ReactQuery({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<SkeletonElement />}>{children}</Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
