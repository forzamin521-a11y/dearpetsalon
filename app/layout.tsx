import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "디어펫살롱 | The Art of Scissor Work",
  description: "수원 곡반정동 100% 가위컷 전문 살롱. 기계 미용 없는 프리미엄 케어.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-soft-beige text-dark-charcoal selection:bg-mute-rose selection:text-dark-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
