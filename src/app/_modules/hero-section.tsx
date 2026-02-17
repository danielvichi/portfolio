interface HeroSectionProps {
  title: string;
  subTitle: string;
}

export default function HeroSection({ title, subTitle }: HeroSectionProps) {
  return (
    <div className="container m-auto flex flex-row items-center justify-center gap-12 px-4 py-16">
      <div className="z-10 container flex flex-col gap-6 md:gap-12">
        <h1
          className="text-8xl leading-[80%] tracking-tighter text-white md:text-9xl"
          style={{ wordSpacing: "100%" }}
        >
          {title}
        </h1>
        <p
          className="text-2xl font-extrabold tracking-wide wrap-break-word text-white uppercase md:text-4xl"
          style={{ wordSpacing: '2000%' }}
        >
          {subTitle}
        </p>
      </div>

      <div className="absolute z-0 container flex flex-col items-center justify-center md:relative">
        aadasda
      </div>
    </div>
  );
}
