import AboutSection from "../_modules/about-section";
import ContactSection from "../_modules/contact-section";
import FormationSection from "../_modules/formation-section";
import HeroSection from "../_modules/hero-section";
import OthersExperienceRoleSection from "../_modules/personal-project-section.tsx";
import PersonalProjectSection from "../_modules/personal-project-section.tsx";
import Footer from "../_components/footer";
import Header from "../_components/header";
import PageBackground from "../_components/page-background";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import EndorserSection from "../_modules/endorser-section";
import LastExperienceRoleSection from "../_modules/last-experience-role-section";
import ModalProvider from "../_contexts/modal-context";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main className="text-txt-primary relative min-h-full">
      <ModalProvider>
        <>
          <PageBackground />
          <Header content={dict.header} />
          <HeroSection title={dict.hero.title} subTitle={dict.hero.sub_title} />
          <AboutSection title={dict.about.title} content={dict.about.content} />
          <EndorserSection
            title={dict.endorser.title}
            content={dict.endorser.content}
          />
          <LastExperienceRoleSection
            title={dict.last_exp.title}
            subTitle={dict.last_exp.sub_title}
            description={dict.last_exp.description}
            projectsTitle={dict.last_exp.projects_title}
            projects={dict.last_exp.projects}
            techStackTitle={dict.last_exp.tech_stack_title}
            techStack={dict.last_exp.tech_stack}
          />
          <OthersExperienceRoleSection title="title" />
          <PersonalProjectSection title="title" />
          <FormationSection title="title" />
          <ContactSection title="title" />
          <Footer />
        </>
      </ModalProvider>
    </main>
  );
}
