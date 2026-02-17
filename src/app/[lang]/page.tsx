import HeroSection from "../_modules/hero-section";
import ContainerScreen from "../components/container-screen";
import Header from "../components/header";
import PageBackground from "../components/page-background";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main>
      <PageBackground />
      <ContainerScreen>
        <Header />
        <HeroSection title={dict.hero.title} subTitle={dict.hero.sub_title} />
      </ContainerScreen>
    </main>
  );
}
