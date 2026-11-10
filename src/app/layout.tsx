import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "APEX Auto Detailing | Precision, Elevated", description: "A premium auto detailing concept. Explore services and request a demonstration appointment.", applicationName: "APEX Auto Detailing", openGraph: { title: "APEX Auto Detailing", description: "Precision, elevated.", type: "website" }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
