"use client";

import { AppProvider } from "../../lib/context/AppContext";
import ErrorBoundary from "../ui/ErrorBoundary";
import { ToastProvider } from "../ui/Toast";
import type { ReactNode } from "react";

export default function ClientProviders({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <AppProvider>{children}</AppProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}
