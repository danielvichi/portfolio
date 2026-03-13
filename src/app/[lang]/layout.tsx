import "~/styles/globals.css";

import { type Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Daniel Ishigaki",
  description:
    "Personal portfolio as Full-stack developer with formation, jobs and projects.",
  openGraph: {
    type: "website",
    alternateLocale: ["en", "pt"],
    locale: "en",
    title: "Daniel Ishigaki Portfolio",
    description:
      "I'm Daniel Ishigaki, a Full-stack developer with a passion for crafting innovative solutions. With a background in Graphic Design and experience in various technologies, I specialize in building scalable web applications and engaging user experiences. Explore my portfolio to see how I can bring your ideas to life.",
    url: "danielvichi.com",
    images: [
      {
        url: "https://storage.googleapis.com/assets.danielvichi.com/danielvichi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel (Vichi) Ishigaki",
      },
    ],
    emails: ["danielvichi@gmail.com"],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  twitter: {
    creator: "@dnlvch",
    site: "@dnlvch",
    card: "summary_large_image",
    title: "Daniel Ishigaki Portfolio",
    description:
      "I'm Daniel Ishigaki, a Full-stack developer with a passion for crafting innovative solutions. With a background in Graphic Design and experience in various technologies, I specialize in building scalable web applications and engaging user experiences. Explore my portfolio to see how I can bring your ideas to life.",
    images: [
      {
        url: "https://storage.googleapis.com/assets.danielvichi.com/danielvichi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel (Vichi) Ishigaki",
      },
    ],
  },
  keywords: [
    "Daniel Ishigaki",
    "Vichi",
    "Full-stack developer",
    "Software engineer",
    "Front-end developer",
    "Back-end developer",
    "Pixel perfectionist",
    "React.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "Nest.js",
    "Rest APIs",
    "PostgreSQL",
  ],
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono-sans",
});

const mailerLite = `
 (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '2143455');`;

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID!;

if (!GTM_ID) {
  throw new Error("GTM_ID is not defined in environment variables");
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${robotoMono.variable}`}>
      {process.env.NODE_ENV === "production" ? (
        <GoogleTagManager gtmId={GTM_ID} />
      ) : null}
      <Script id="mailer-lite">{mailerLite}</Script>
      <body>{children}</body>
    </html>
  );
}
