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

interface SourceLinkProps {
  sourceTitle: string;
  url: string;
}

function SourceLink(props: SourceLinkProps) {
  const { sourceTitle, url } = props;

  return (
    <div className="flex flex-row gap-2">
      Source:
      <ExternalLink href={url} target="_blank">
        {sourceTitle}
      </ExternalLink>
    </div>
  );
}

function EndorseCard(props: EndorseCardProps) {
  const { name, role, comment, source, sourceUrl } = props;

  return (
    <div className="bg-background-secondary relative flex flex-col gap-4 border border-gray-500 p-8">
      <QuoteIcon className="stroke-accent-tertiary absolute top-6 right-6 stroke-1 opacity-30" />

      <div className="flex flex-col gap-4 text-sm">
        <Markdown>{comment}</Markdown>
      </div>

      <div>
        <h3 className="text-xl font-extrabold">
          <Markdown>{name}</Markdown>
        </h3>
        <span className="text-accent-tertiary">
          <Markdown>{role}</Markdown>
        </span>
      </div>

      <SourceLink sourceTitle={source} url={sourceUrl} />
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

      <div className="max-h-[150px] min-w-[150px] aspect-square overflow-hidden">
        <img
          src={profilePictureUrl}
          className="aspect-square group-hover:scale-110 transition-all"
          alt={`${name} profile picture`}
        />
      </div>

      <div className="p-4 text-left text-wrap">
        <h3 className="text-xl font-extrabold">
          <Markdown>{name}</Markdown>
        </h3>
        <span className="text-accent-tertiary leading-5">
          <Markdown>{role}</Markdown>
        </span>
      </div>

      
    </div>
  );
}

EndorseCard.thumbnail = EndorseCardThumbnail;

export default EndorseCard;
