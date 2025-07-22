import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["thai", "latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "เมพาร์ - Design Studio",
  description: "บริษัทออกแบบและพัฒนา",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${prompt.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
