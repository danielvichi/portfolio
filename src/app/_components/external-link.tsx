import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

const ExternalLink = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <a
      className={`group hover:text-accent-primary flex w-fit flex-row items-center gap-1.5 transition-all hover:underline ${className}`}
      target="_blank"
      ref={ref}
      {...rest}
    >
      <ExternalLinkIcon className="text-accent-primary mt-1 transition-transform group-hover:scale-125" />
      {children}
    </a>
  );
});

ExternalLink.displayName = "ExternalLink";

export default ExternalLink;
