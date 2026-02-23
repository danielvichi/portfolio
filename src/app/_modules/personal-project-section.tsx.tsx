import ContainerScreen from "../_components/container-screen";
import SectionTitle from "../_components/section-title";

interface PersonalProjectSectionProps {
  title: string;
  // content: string;
}

export default function PersonalProjectSection({
  title,
  // content,
}: PersonalProjectSectionProps) {
  return (
    <ContainerScreen className="px-4 py-24">
      <SectionTitle>{title}</SectionTitle>
      <p>About project</p>
      <h3> Front-end </h3>
      <a href="https://github.com/danielvichi/espera-queue-fe">
        Github project page
      </a>
      <h3> Back-end </h3>
      <a href="https://github.com/danielvichi/espera-queue-be">
        Github project page
      </a>
    </ContainerScreen>
  );
}
