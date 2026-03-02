import Markdown from "react-markdown";
import ExternalLink from "~/app/_components/external-link";
import ChevronRight from "~/app/_icons/chevron-right";

export interface ProjectCardProps {
  title: string;
  description: string;
  projectUrl?: string;
  projImgs?: string[];
  thumbnailUrl?: string;
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
      <div className="border-accent-tertiary -mx-[20px] h-[20px] w-[20px] rounded-full border-[1.5px]" />
      <ChevronRight className="stroke-accent-tertiary h-2/3 fill-none stroke-3" />
    </>
  );
}

type DevBackgroundProps = React.HTMLAttributes<HTMLDivElement>;

function DevBackground(props: DevBackgroundProps) {
  const { className, ...rest } = props;
  return (
    <div
      className={`absolute inset-[2px] flex items-center justify-end brightness-50 transition-all group-hover:scale-110 ${className}`}
      {...rest}
    >
      <DevIcon />
    </div>
  );
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, projImgs, projectUrl } = props;

  const projectImgList = projImgs?.map((imgUrl, index) => (
    <img
      key={index}
      src={imgUrl}
      alt={`${title} project sample image ${index + 1}`}
    />
  ));

  return (
    <div className="bg-background-secondary relative flex max-h-[70vh] w-full min-w-[300px] flex-col gap-4 overflow-x-hidden overflow-y-scroll border border-gray-500 p-4">
      <h5 className="bg-accent-tertiary relative w-fit px-2 py-0.5 text-2xl">
        {title}
      </h5>

      <div className="relative grid grid-cols-1 gap-8 p-4 px-8 md:grid-cols-5 md:px-16">
        <div className="col-span-2 flex flex-col gap-4">
          <Markdown>{description}</Markdown>

          {projectUrl && (
            <ExternalLink
              href={projectUrl}
              className="text-accent-primary mt-4 inline-flex items-center gap-1 text-sm"
            >
              {projectUrl}
            </ExternalLink>
          )}
        </div>

        <div className="relative col-span-3 flex flex-col gap-4">
          <div className="hidden md:flex absolute top-[50px] left-1/2 h-[150px] w-[300px] -translate-x-3/4 opacity-50">
            <DevBackground className="scale-200" />
          </div>
          {projImgs && projImgs.length > 0 ? projectImgList : ""}
        </div>
      </div>
    </div>
  );
}

function ProjectCardThumbnail(props: ProjectCardProps) {
  const { title, thumbnailUrl } = props;
  return (
    <div className="group hover:border-accent-primary relative h-[150px] w-[400px] overflow-hidden border border-gray-500 p-4 transition-all">
      {thumbnailUrl ? (
        <ImageBackground imgUrl={thumbnailUrl} />
      ) : (
        <DevBackground />
      )}
      <h5 className="bg-accent-tertiary relative w-fit px-2 py-0.5">{title}</h5>
    </div>
  );
}

ProjectCard.thumbnail = ProjectCardThumbnail;
