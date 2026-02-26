type ContentWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export default function ContentWrapper(props: ContentWrapperProps) {
  const { children, className, ...rest } = props;
  return (
    <div className={`flex flex-col gap-4 px-8 py-4 md:px-20 ${className}`} {...rest}>
      {children}
    </div>
  );
}
