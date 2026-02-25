import Markdown from "react-markdown";
import ChevronRight from "~/app/_icons/chevron-right";

export interface ProjectCardProps {
  title: string;
  description: string;
  projectUrl?: string;
  coverImageUrl?: string;
}

function ImageBackground({ imgUrl }: { imgUrl: string }) {
  return (
    <div
      className="absolute inset-[2px] brightness-50 transition-all group-hover:scale-110"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundOrigin: "center",
        backdropFilter: "blur(2px)",
      }}
    />
  );
}

function DevIcon() {
  return (
    <>
      <ChevronRight className="stroke-accent-tertiary h-2/3 rotate-180 fill-none stroke-3" />
      <div className="border-accent-tertiary mx-5 h-[110px] w-[15px] rotate-30 border-[1.5px]" />
      <ChevronRight className="stroke-accent-tertiary h-2/3 fill-none stroke-3" />
    </>
  );
}

function DevBackground() {
  return (
    <div className="absolute inset-[2px] flex items-center justify-end brightness-50 transition-all group-hover:scale-110">
      <DevIcon />
    </div>
  );
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, coverImageUrl, projectUrl } = props;
  return (
    <div className="bg-background-secondary relative flex max-h-[70vh] w-full min-w-[300px] flex-col gap-4 overflow-y-scroll border border-gray-500 p-4">
      <div className="absolute top-0 right-0 h-[150px] w-[300px] opacity-50">
        <DevBackground />
      </div>
      <h5 className="bg-accent-tertiary relative w-fit px-2 py-0.5 text-2xl">
        {title}
      </h5>
      <div className="flex flex-col p-4 px-8 md:px-16">
        <Markdown>{description}</Markdown>
        {coverImageUrl ? (
          <img src={coverImageUrl} alt={`${title} project sample image`} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function ProjectCardThumbnail(props: ProjectCardProps) {
  const { title, coverImageUrl } = props;
  return (
    <div className="group hover:border-accent-primary relative h-[150px] w-[400px] overflow-hidden border border-gray-500 p-4 transition-all">
      {coverImageUrl ? (
        <ImageBackground imgUrl={coverImageUrl} />
      ) : (
        <DevBackground />
      )}
      <h5 className="bg-accent-tertiary relative w-fit px-2 py-0.5">{title}</h5>
    </div>
  );
}

ProjectCard.thumbnail = ProjectCardThumbnail;
