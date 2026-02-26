import Tag from "~/app/_components/tag";

export interface TechStack {
  "front-end": string[];
  "back-end"?: string[];
  "dev-ops"?: string[];
  ux?: string[];
  web3?: string[];
  others?: string[];
}

function TagListSection({ title, tags }: { title: string; tags: string[] }) {
  const tagList = tags.map((tag) => (
    <Tag key={tag} size="sm">
      {tag}
    </Tag>
  ));
  return (
    <div className="flex flex-col gap-1">
      <h5>{title}</h5>
      <div className="flex w-full flex-row flex-wrap gap-1">{tagList}</div>
    </div>
  );
}

export default function TechStackTags({ techStack }: { techStack: TechStack }) {
  const frontEndTagList = techStack["front-end"];
  const backEndTagList = techStack["back-end"];
  const devOpsTagList = techStack["dev-ops"];
  const uxTagList = techStack.ux;
  const web3TagList = techStack.web3;
  const otherTagList = techStack.others;

  return (
    <div className="flex flex-col gap-8">
      <TagListSection title={"Front-end"} tags={frontEndTagList} />

      {backEndTagList ? (
        <TagListSection title={"Back-end"} tags={backEndTagList} />
      ) : (
        ""
      )}

      {devOpsTagList ? (
        <TagListSection title={"DevOps"} tags={devOpsTagList} />
      ) : (
        ""
      )}

      {web3TagList ? <TagListSection title={"Web3"} tags={web3TagList} /> : ""}

      {uxTagList ? <TagListSection title={"UX"} tags={uxTagList} /> : ""}

      {otherTagList ? (
        <TagListSection title={"Others"} tags={otherTagList} />
      ) : (
        ""
      )}
    </div>
  );
}
