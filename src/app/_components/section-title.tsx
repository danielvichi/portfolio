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

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  (props, ref) => {
    const {
      children,
      className,
      hideIcon = false,
      customIcon,
      ...rest
    } = props;
    return (
      <h2
        className={`text-txt-secondary flex flex-row items-center gap-1.5 text-2xl capitalize ${className}`}
        ref={ref}
        {...rest}
      >
        {hideIcon ? "" : <Icon icon={customIcon} />}
        {children}
      </h2>
    );
  },
);

SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
