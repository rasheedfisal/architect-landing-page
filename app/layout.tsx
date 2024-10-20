import type { Metadata } from "next";
import { tajwal } from "@/lib/fonts";
import "./globals.css";
import { env } from "@/lib/env.server";

export const metadata: Metadata = {
  metadataBase: new URL(env.METADATA_BASE_ROUTE),
  title: {
    default: "architect",
    template: `%s | architect`,
  },
  description:
    "the paltform for architects to find the best suitable freelance job",
  icons: {
    icon: "/icon.png", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={tajwal.className}
        dir="rtl"
      >
        {children}
      </body>
    </html>
  );
}
