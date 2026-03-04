import { forwardRef } from "react";

const SectionWrapper = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <section className={className} ref={ref} {...rest}>
      {children}
    </section>
  );
});

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
