import ContainerScreen from "../components/container-screen";

interface AboutSectionProps {
  title: string;
  content: string;
}

export default function AboutSection({ title, content }: AboutSectionProps) {
  return (
    <ContainerScreen className="border border-red-600 px-4 py-24">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="flex flex-col gap-1">
        <a href="https://www.linkedin.com/in/daniel-ishigaki/" target="_blank">
          Linkedin
        </a>
        <a href="https://github.com/danielvichi/" target="_blank">
          Github
        </a>
      </div>
    </ContainerScreen>
  );
}
