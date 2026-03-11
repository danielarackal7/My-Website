import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Arackal — Industrial Engineering & Computer Science",
  description:
    "Junior at Texas A&M building quantitative models, cloud infrastructure, and software that solves real problems.",
  openGraph: {
    title: "Daniel Arackal",
    description:
      "Industrial Engineering & Computer Science at Texas A&M University",
    url: "https://danielarackal.com",
    siteName: "Daniel Arackal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Arackal",
    description:
      "Industrial Engineering & Computer Science at Texas A&M University",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
