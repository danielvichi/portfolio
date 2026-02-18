import { forwardRef } from "react";

const ContainerScreen = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={`relative container mx-auto min-h-screen ${className}`}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

ContainerScreen.displayName = "ContainerScreen";

export default ContainerScreen;
