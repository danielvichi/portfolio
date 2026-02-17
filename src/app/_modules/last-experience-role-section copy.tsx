import ContainerScreen from "../components/container-screen";

interface LastExperienceRoleSectionProjects {
  title: string;
  content: string;
}

interface LastExperienceRoleSectionProps {
  title: string;
  content: string;
  subTitle: string;
  // projects: LastExperienceRoleSectionProjects[];
  techStack?: string[];
}

export default function LastExperienceRoleSection(
  props: LastExperienceRoleSectionProps,
) {
  const { title, content, subTitle} = props;
  return (
    <ContainerScreen className="border border-red-600 px-4 py-24">
      <h2>{title}</h2>
      <p>{content}</p>
      <h3>KLKTN / SanFran Tokyo</h3>
      <p> About company</p>
      <h4>{subTitle}</h4>
      <h5>Weebox</h5>
      <h5>SFT studios</h5>
      {}
    </ContainerScreen>
  );
}
