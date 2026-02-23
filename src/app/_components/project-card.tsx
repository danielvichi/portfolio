import Markdown from "react-markdown";

export interface ProjectCardProps {
  title: string;
  description: string;
  projectUrl?: string;
  coverImageUrl?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, coverImageUrl, projectUrl } = props;
  return (
    <div className="relative flex flex-col gap-4 max-h-[70vh] w-full min-w-[300px] overflow-y-scroll border border-gray-500 p-4">
      <h5 className="bg-accent-tertiary relative w-fit px-2 py-0.5">{title}</h5>
      <Markdown>{description}</Markdown>
      <img src={coverImageUrl} />
    </div>
  );
}

function ProjectCardThumbNail(props: ProjectCardProps) {
  const { title, description, coverImageUrl, projectUrl } = props;
  return (
    <div className="relative h-[150px] w-[400px] border border-gray-500 p-4">
      <div
        className="absolute inset-[2px] brightness-50"
        style={{
          backgroundImage: `url(${coverImageUrl})`,
          backgroundSize: "cover",
          backgroundOrigin: "center",
          backdropFilter: "blur(2px)",
        }}
      />
      <h5 className="bg-accent-tertiary relative w-fit px-2 py-0.5">{title}</h5>
    </div>
  );
}

ProjectCard.thumbnail = ProjectCardThumbNail;
