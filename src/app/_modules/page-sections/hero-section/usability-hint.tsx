import { MoveIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

const UsabilityHint = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={`mx-auto flex w-fit items-center justify-center gap-2 bg-black/50 px-4 py-1 text-lg font-bold text-white ${className}`}
      {...rest}
    >
      <MoveIcon className="h-5 w-5" />
      Move me around!
    </div>
  );
});

UsabilityHint.displayName = "UsabilityHint";
export default UsabilityHint;
