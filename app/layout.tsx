import type { Metadata } from "next";
import { tajwal } from "@/lib/fonts";
import "./globals.css";
import { env } from "@/lib/env.server";

export const metadata: Metadata = {
  metadataBase: new URL(env.METADATA_BASE_ROUTE),
  title: {
    default: "Hundsly",
    template: `%s | Hundsly`,
  },
  description:
    "the paltform for Architect to find the best suitable freelance job",
  icons: {
    icon: "/assets/logo.png", // /public path
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
