import ContainerScreen from "../components/container-screen";

interface OtherExperienceContent {
  companyName: string;
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
    <ContainerScreen className="border border-red-600 px-4 py-24">
      <h2>{title}</h2>
      <h3>Softcenter </h3>
      <p> About exp</p>
      <h3>Flockin</h3>
      <p> About exp</p>
    </ContainerScreen>
  );
}
