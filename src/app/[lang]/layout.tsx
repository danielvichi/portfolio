import "~/styles/globals.css";

import { type Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Daniel Ishigaki",
  description: "Personal portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono-sans",
});

// const mailerLite = `
//  (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
//     .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
//     n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
//     (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
//     ml('account', '2143455');`;

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
      {/* <Script id="mailer-lite">{mailerLite}</Script> */}
      <body>{children}</body>
    </html>
  );
}
