import ContentWrapper from "~/app/_components/content-wrapper";
import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/titles";

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
    <ContainerScreen className="px-4 py-24 flex flex-col gap-4">
      <SectionTitle.h2>{title}</SectionTitle.h2>
      <ContentWrapper className="flex flex-col gap-8">
        {formationsList}
      </ContentWrapper>
    </ContainerScreen>
  );
}
