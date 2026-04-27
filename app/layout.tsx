import type { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


// This layout only exists to prevent Next.js errors.
// The actual layout is in app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
