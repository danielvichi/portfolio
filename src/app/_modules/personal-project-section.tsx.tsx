import ContainerScreen from "../components/container-screen";

interface PersonalProjectSectionProps {
  title: string;
  // content: string;
}

export default function PersonalProjectSection({
  title,
  // content,
}: PersonalProjectSectionProps) {
  return (
    <ContainerScreen className="border border-red-600 px-4 py-24">
      <h2>{title}</h2>
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
