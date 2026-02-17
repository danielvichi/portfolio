import ContainerScreen from "../components/container-screen";

interface FormationSectionProps {
  title: string;
  // content: string;
}

export default function FormationSection({
  title,
  // content,
}: FormationSectionProps) {
  return (
    <ContainerScreen className="border border-red-600 px-4 py-24">
      <h2>{title}</h2>
      <h3> UFTPR </h3>

      <h3> UEL </h3>
    </ContainerScreen>
  );
}
