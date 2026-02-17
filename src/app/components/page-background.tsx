import { forwardRef } from "react";

const PageBackground = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={`absolute inset-0 bg-gray-800 ${className}`}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

PageBackground.displayName = "PageBackground";

export default PageBackground;
