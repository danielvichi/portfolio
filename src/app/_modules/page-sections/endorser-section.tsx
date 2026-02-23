import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/section-title";
import ExternalLink from "../../_components/external-link";
import Markdown from "react-markdown";
import { HeartIcon } from "@radix-ui/react-icons";
import QuoteIcon from "../../_icons/quote-icon";

interface EndorserContent {
  name: string;
  role: string;
  comment: string;
}

interface EndorserSectionProps {
  title: string;
  content: EndorserContent[];
}

function EndorseCard(props: EndorserContent) {
  const { name, role, comment } = props;

  return (
    <div className="relative border border-gray-500 p-8">
      <QuoteIcon className="absolute top-6 right-6 stroke-accent-tertiary opacity-30 stroke-1" />
      <h3 className="text-xl font-extrabold">
        <Markdown>{name}</Markdown>
      </h3>
      <span className="text-accent-tertiary">
        <Markdown>{role}</Markdown>
      </span>

      <div className="mt-4 flex flex-col gap-4 text-sm">
        <Markdown>{comment}</Markdown>
      </div>
    </div>
  );
}

export default function EndorserSection({
  title,
  content,
}: EndorserSectionProps) {
  const comments = content.map((comment) => (
    <EndorseCard
      key={comment.name}
      name={comment.name}
      role={comment.role}
      comment={comment.comment}
    />
  ));

  return (
    <ContainerScreen className="flex flex-col gap-8 px-4 py-24">
      <SectionTitle
        customIcon={<HeartIcon className="text-accent-primary h-8 w-8" />}
      >
        <Markdown>{title}</Markdown>
      </SectionTitle>

      {comments}

      <div className="flex flex-col gap-1">
        Source:
        <ExternalLink
          href="https://www.linkedin.com/in/daniel-ishigaki/"
          target="_blank"
        >
          Linkedin
        </ExternalLink>
      </div>
    </ContainerScreen>
  );
}
