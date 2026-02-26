import { ChevronRightIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  hideIcon?: boolean;
  customIcon?: React.ReactElement;
}

function Icon({ icon }: { icon?: React.ReactElement }): React.ReactElement {
  if (icon) {
    return icon;
  }
  return (
    <ChevronRightIcon width={28} height={30} className="text-accent-primary" />
  );
}

function SectionTitle() {
  return null;
}

function H2(props: SectionTitleProps) {
  const { children, className, hideIcon = false, customIcon, ...rest } = props;
  return (
    <h2
      className={`text-txt-secondary flex flex-row items-center gap-1.5 text-2xl capitalize ${className}`}
      {...rest}
    >
      {hideIcon ? "" : <Icon icon={customIcon} />}
      {children}
    </h2>
  );
}

function H3(props: SectionTitleProps) {
  const { children, className, hideIcon = true, customIcon, ...rest } = props;
  return (
    <h3
      className={`text-accent-secondary flex flex-row items-center gap-1.5 text-xl capitalize ${className}`}
      {...rest}
    >
      {hideIcon ? "" : <Icon icon={customIcon} />}
      {children}
    </h3>
  );
}

function H4(props: SectionTitleProps) {
  const { children, className, hideIcon = true, customIcon, ...rest } = props;
  return (
    <h4
      className={`text-accent-secondary flex flex-row items-center gap-1.5 text-xl capitalize ${className}`}
      {...rest}
    >
      {hideIcon ? "" : <Icon icon={customIcon} />}
      {children}
    </h4>
  );
}

SectionTitle.h2 = H2;
SectionTitle.h3 = H3;
SectionTitle.h4 = H4;

export default SectionTitle;
