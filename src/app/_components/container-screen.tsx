import { forwardRef } from "react";

const ContainerScreen = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={`relative container mx-auto  ${className}`}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

ContainerScreen.displayName = "ContainerScreen";

export default ContainerScreen;
