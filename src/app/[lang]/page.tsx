import AboutSection from "../_modules/page-sections/about-section";
import ContactSection from "../_modules/page-sections/contact-section";
import FormationSection from "../_modules/page-sections/formation-section";
import HeroSection from "../_modules/page-sections/hero-section/hero-section";
import PersonalProjectSection from "../_modules/page-sections/personal-project-section.tsx";
import Footer from "../_components/footer";
import Header from "../_components/header";
import PageBackground from "../_components/page-background";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import RecommendationSection from "../_modules/page-sections/recommendation-section/recommendation-section";
import ModalProvider from "../_contexts/modal-context";
import PreviousExperienceRoleSection from "../_modules/page-sections/previous-experience-role-section/previous-experience-role-section";
import SideNavigation from "../_components/side-navigation";

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main className="text-txt-primary relative min-h-full">
      <ModalProvider>
        <>
          <SideNavigation />
          <PageBackground />
          <Header fields={dict.header} />
          <HeroSection fields={dict.hero} />
          <AboutSection fields={dict.about} />
          <RecommendationSection fields={dict.endorser} />
          <PreviousExperienceRoleSection fields={dict.klktn_exp} />
          <PreviousExperienceRoleSection fields={dict.softcenter_exp} />
          <PreviousExperienceRoleSection fields={dict.dvichiweb_exp} />
          <PersonalProjectSection fields={dict.personal_project} />
          <FormationSection
            title={dict.formation.title}
            content={dict.formation.formations}
          />
          <ContactSection fields={dict.contact} />
          <Footer
            fields={{
              ...dict.footer,
              sub_title: dict.hero.sub_title,
            }}
          />
        </>
      </ModalProvider>
    </main>
  );
}
