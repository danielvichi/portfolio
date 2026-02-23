import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/section-title";

interface ContactSectionProps {
  title: string;
  // content: string;
}

export default function ContactSection({
  title,
  // content,
}: ContactSectionProps) {
  return (
    <ContainerScreen className="px-4 py-24">
      <SectionTitle>{title}</SectionTitle>
    </ContainerScreen>
  );
}
