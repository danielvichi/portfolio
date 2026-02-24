import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/section-title";


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
  return (
    <ContainerScreen className="px-4 py-24">
      <SectionTitle>{title}</SectionTitle>
      <h3> UFTPR </h3>

      <h3> UEL </h3>
    </ContainerScreen>
  );
}
