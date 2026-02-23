export default function QuoteIcon(props: React.HTMLAttributes<SVGElement>) {
  const { className, ...rest } = props;
  return (
    <svg
      className={className}
      width="133"
      height="120"
      viewBox="0 0 133 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M72.4851 72.4753H96.0099C96.0099 72.4753 98.6238 91.7228 91.2574 120H117.158C130.465 90.5347 134.03 79.604 132.129 0H72.4851V72.4753Z" />
      <path d="M0 72.4753H23.5248C23.5248 72.4753 26.1386 91.7228 18.7723 120H44.6733C57.9802 90.5347 61.5446 79.604 59.6436 0H0V72.4753Z" />
    </svg>
  );
}
