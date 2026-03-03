"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import ExternalLink from "./external-link";
import SectionTitle from "./titles";
import Markdown from "react-markdown";

interface FooterFields {
  title: string;
  sub_title: string;
  rights: string;
  resume: string;
  resume_url?: string;
  vichi: string;
}

interface FooterProps {
  fields: FooterFields;
}

export default function Footer(props: FooterProps) {
  const { title, sub_title, rights, resume, resume_url, vichi } = props.fields;
  return (
    <footer className="bg-background-secondary relative w-full border-t-gray-500 py-8">
      <div className="container m-auto grid grid-cols-1 md:grid-cols-4 justify-between gap-8 md:gap-4 px-4">
        <div className="col-span-1">
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger className="cursor-pointer" asChild>
                <SectionTitle.h2 hideIcon={true}>{title}</SectionTitle.h2>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade z-50 max-w-[300px] rounded bg-white px-2 py-1.5 text-xs leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] select-none"
                  sideOffset={5}
                >
                  <Markdown>{vichi}</Markdown>
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

          <SectionTitle.h3>{sub_title}</SectionTitle.h3>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <SectionTitle.h3> Links </SectionTitle.h3>
          <ExternalLink href="https://www.github.com/danielvichi">
            Github
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/daniel-ishigaki">
            Linkedin
          </ExternalLink>
          <ExternalLink href={resume_url}>{resume}</ExternalLink>
        </div>

        <div className="col-span-1 flex flex-col gap-2">
          <SectionTitle.h3>Contact me</SectionTitle.h3>
          danielvichi@gmail.com
        </div>

        <div className="col-span-1 flex items-end">{rights}</div>
      </div>
    </footer>
  );
}
