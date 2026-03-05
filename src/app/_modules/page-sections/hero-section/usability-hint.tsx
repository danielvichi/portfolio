import { MoveIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

interface UsabilityHintProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const UsabilityHint = forwardRef<
  HTMLDivElement,
  UsabilityHintProps
>((props, ref) => {
  const { label, className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={`mx-auto flex w-fit items-center justify-center gap-2 bg-black/50 px-4 py-1 text-lg font-bold text-white ${className}`}
      {...rest}
    >
      <MoveIcon className="h-5 w-5" />
      {label ?? "Click and drag to interact"}
    </div>
  );
});

UsabilityHint.displayName = "UsabilityHint";
export default UsabilityHint;
