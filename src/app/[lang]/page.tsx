import AboutSection from "../_modules/about-section";
import ContactSection from "../_modules/contact-section";
import FormationSection from "../_modules/formation-section";
import HeroSection from "../_modules/hero-section";
import OthersExperienceRoleSection from "../_modules/personal-project-section.tsx";
import PersonalProjectSection from "../_modules/personal-project-section.tsx";
import LastExperienceRoleSection from "../_modules/personal-project-section.tsx";
import Footer from "../components/footer";
import Header from "../components/header";
import PageBackground from "../components/page-background";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main className="relative min-h-full text-white">
      <PageBackground />
      <Header />
      <HeroSection title={dict.hero.title} subTitle={dict.hero.sub_title} />
      <AboutSection title={dict.about.title} content={dict.about.content} />
      <LastExperienceRoleSection title="title" />
      <OthersExperienceRoleSection title="title" />
      <PersonalProjectSection title="title" />
      <FormationSection title="title" />
      <ContactSection title="title" />
      <Footer />
    </main>
  );
}
