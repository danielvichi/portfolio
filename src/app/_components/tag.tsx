import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

export const tagVariants = cva("bg-accent-tertiary", {
  variants: {
    size: {
      sm: "px-1 py-0.5 text-xs",
      md: "px-2 py-1 text-sm",
      lg: "px-2 py-1 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type TagProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof tagVariants>;

export default function Tag(props: TagProps) {
  const { children, className, size, ...rest } = props;
  return (
    <div className={cn(tagVariants({ size, className }))} {...rest}>
      {children}
    </div>
  );
}
