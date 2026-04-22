"use client";

import { AppProvider } from "../../lib/context/AppContext";
import type { ReactNode } from "react";

export default function ClientProviders({
  children,
}: {
  children: ReactNode;
}) {
  return <AppProvider>{children}</AppProvider>;
}
