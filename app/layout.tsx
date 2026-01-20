import type { ReactNode } from "react";

// This layout only exists to prevent Next.js errors.
// The actual layout is in app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
