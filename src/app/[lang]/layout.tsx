import "~/styles/globals.css";

import { type Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Daniel Ishigaki",
  description: "Personal portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono-sans",
});

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "de" }];
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
