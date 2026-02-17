import ContainerScreen from "../components/container-screen";

interface ContactSectionProps {
  title: string;
  // content: string;
}

export default function ContactSection({
  title,
  // content,
}: ContactSectionProps) {
  return (
    <ContainerScreen className="border border-red-600 px-4 py-24">
      <h2>{title}</h2>
    </ContainerScreen>
  );
}
