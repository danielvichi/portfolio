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
    <div className="relative flex max-h-[70vh] w-full min-w-[300px] flex-col gap-4 overflow-y-scroll border border-gray-500 p-4">
      <h5 className="bg-accent-tertiary relative w-fit px-2 py-0.5">{title}</h5>
      <Markdown>{description}</Markdown>
      {coverImageUrl ? (
        <img src={coverImageUrl} alt={`${title} project sample image`} />
      ) : (
        ""
      )}
    </div>
  );
}

function ProjectCardThumbnail(props: ProjectCardProps) {
  const { title, coverImageUrl } = props;
  return (
    <div className="group hover:border-accent-primary relative h-[150px] w-[400px] overflow-hidden border border-gray-500 p-4 transition-all">
      <div
        className="absolute inset-[2px] brightness-50 transition-all group-hover:scale-110"
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

ProjectCard.thumbnail = ProjectCardThumbnail;
