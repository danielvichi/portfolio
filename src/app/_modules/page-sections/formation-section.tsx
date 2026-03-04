import ContentWrapper from "~/app/_components/content-wrapper";
import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/titles";
import SectionWrapper from "~/app/_components/section-wrapper";
import SECTION_IDS from "~/constants/section-ids";
import FormationIcon from "~/app/_icons/formation-icon";

interface Formation {
  institution: string;
  degree: string;
  duration: string;
}
interface FormationSectionProps {
  title: string;
  content: Formation[];
}

export default function FormationSection({
  title,
  content,
}: FormationSectionProps) {
  const formationsList = content.map((formation) => (
    <div key={formation.degree}>
      <SectionTitle.h3>{formation.degree} </SectionTitle.h3>
      <SectionTitle.h4>{formation.institution} </SectionTitle.h4>
      <p>{formation.duration}</p>
    </div>
  ));

  return (
    <SectionWrapper id={SECTION_IDS.FORMATION}>
      <ContainerScreen className="flex flex-col gap-4 px-4 py-24">
        <SectionTitle.h2
          customIcon={<FormationIcon className="fill-accent-primary h-8 w-8" />}
        >
          {title}
        </SectionTitle.h2>
        <ContentWrapper className="flex flex-col gap-8">
          {formationsList}
        </ContentWrapper>
      </ContainerScreen>
    </SectionWrapper>
  );
}
