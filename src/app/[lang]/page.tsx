import AboutSection from "../_modules/page-sections/about-section";
import ContactSection from "../_modules/page-sections/contact-section";
import FormationSection from "../_modules/page-sections/formation-section";
import HeroSection from "../_modules/page-sections/hero-section";
import PersonalProjectSection from "../_modules/page-sections/personal-project-section.tsx";
import Footer from "../_components/footer";
import Header from "../_components/header";
import PageBackground from "../_components/page-background";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import RecommendationSection from "../_modules/page-sections/recommendation-section/recommendation-section";
import ModalProvider from "../_contexts/modal-context";
import PreviousExperienceRoleSection from "../_modules/page-sections/previous-experience-role-section/previous-experience-role-section";

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
          <RecommendationSection
            title={dict.endorser.title}
            content={dict.endorser.content}
          />
          <PreviousExperienceRoleSection
            title={dict.last_exp.title}
            subTitle={dict.last_exp.sub_title}
            duration={dict.last_exp.duration}
            description={dict.last_exp.description}
            projectsTitle={dict.last_exp.projects_title}
            projects={dict.last_exp.projects}
            techStackTitle={dict.last_exp.tech_stack_title}
            techStack={dict.last_exp.tech_stack}
          />
          <PreviousExperienceRoleSection
            title={dict.other_exp.title}
            subTitle={dict.other_exp.sub_title}
            duration={dict.other_exp.duration}
            description={dict.other_exp.description}
            projectsTitle={dict.other_exp.projects_title}
            projects={dict.other_exp.projects}
            techStackTitle={dict.other_exp.tech_stack_title}
            techStack={dict.other_exp.tech_stack}
          />
          <PersonalProjectSection
            title={dict.personal_project.title}
            subTitle={dict.personal_project["sub-title"]}
            description={dict.personal_project.description}
            githubTitle={dict.personal_project.github_title}
            techStackTitle={dict.personal_project.tech_stack_title}
            techStack={dict.personal_project.tech_stack}
          />
          <FormationSection
            title={dict.formation.title}
            content={dict.formation.formations}
          />
          <ContactSection
            title={dict.contact.title}
            description={dict.contact.description}
          />
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
