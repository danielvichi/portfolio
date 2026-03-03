import Markdown from "react-markdown";
import ExternalLink from "~/app/_components/external-link";
import QuoteIcon from "~/app/_icons/quote-icon";

export interface EndorseCardProps {
  name: string;
  role: string;
  profilePictureUrl?: string;
  comment: string;
  source: string;
  sourceUrl: string;
}

interface SourceLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  sourceTitle: string;
  url: string;
}

function SourceLink(props: SourceLinkProps) {
  const { sourceTitle, url, className, ...rest } = props;

  return (
    <div className={`flex flex-row gap-2 ${className}`} {...rest}>
      Source:
      <ExternalLink href={url} target="_blank">
        {sourceTitle}
      </ExternalLink>
    </div>
  );
}

function EndorseCard(props: EndorseCardProps) {
  const { name, role, comment, profilePictureUrl, source, sourceUrl } = props;

  return (
    <div className="bg-background-secondary relative flex max-h-[70vh] flex-col gap-4 overflow-y-scroll border border-gray-500 p-8">
      <QuoteIcon className="stroke-accent-tertiary absolute top-6 right-6 stroke-1 opacity-30" />

      <div className="flex flex-col gap-4 text-sm">
        <Markdown>{comment}</Markdown>
      </div>

      <div className="w-full mt-4 flex flex-col md:flex-row gap-4">
        <img
          src={profilePictureUrl}
          className="h-[110px] w-[110px]"
          alt={`${name} profile picure`}
        />

        <div className="flex flex-col">
          <h3 className="text-xl font-extrabold">
            <Markdown>{name}</Markdown>
          </h3>
          <span className="text-accent-tertiary">
            <Markdown>{role}</Markdown>
          </span>
        </div>
          <SourceLink
            sourceTitle={source}
            url={sourceUrl}
            className="self-end ml-auto"
          />
      </div>
    </div>
  );
}

export interface EndorseCardThumbnailProps {
  name: string;
  role: string;
  profilePictureUrl?: string;
}

function EndorseCardThumbnail(props: EndorseCardThumbnailProps) {
  const { name, role, profilePictureUrl } = props;

  return (
    <div className="group hover:border-accent-primary relative flex flex-row border border-gray-500 transition-all">
      <div className="aspect-square max-h-[150px] min-w-[150px] overflow-hidden">
        <img
          src={profilePictureUrl}
          className="aspect-square transition-all group-hover:scale-110"
          alt={`${name} profile picture`}
        />
      </div>

      <div className="p-4 text-left text-wrap">
        <h1 className="text-xl font-extrabold">
          <Markdown>{name}</Markdown>
        </h1>
        <span className="text-accent-tertiary leading-5">
          <Markdown>{role}</Markdown>
        </span>
      </div>
    </div>
  );
}

EndorseCard.thumbnail = EndorseCardThumbnail;

export default EndorseCard;
