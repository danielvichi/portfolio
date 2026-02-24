import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/section-title";

interface OtherExperienceContent {
  companyName: string;
  duration: string;
  aboutExperience: string;
  techStack?: string[];
}

interface OthersExperienceRoleSectionProps {
  title: string;
  // content: OtherExperienceContent[];
}

export default function OthersExperienceRoleSection({
  title,
  // content,
}: OthersExperienceRoleSectionProps) {
  return (
    <ContainerScreen className="px-4 py-24">
      <SectionTitle>{title}</SectionTitle>
      <h3>Softcenter </h3>
      <p> About exp</p>
      <h3>Flockin</h3>
      <p> About exp</p>
    </ContainerScreen>
  );
}
