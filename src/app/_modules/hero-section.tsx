import ContainerScreen from "../components/container-screen";

interface HeroSectionProps {
  title: string;
  subTitle: string;
}

export default function HeroSection({ title, subTitle }: HeroSectionProps) {
  return (
    <ContainerScreen className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-4 py-16 border border-red-500">
      <div className="flex flex-col gap-6 md:gap-12">
        <h1
          className="hidden w-1/3 text-8xl leading-[80%] tracking-tighter md:flex md:text-9xl"
          // style={{ wordSpacing: "200%" }}
        >
          {title}
        </h1>
        <p
          className="text-2xl font-extrabold tracking-wide wrap-break-word uppercase md:text-4xl"
        >
          {subTitle}
        </p>
      </div>

      <div className="w-full">aadasda</div>
    </ContainerScreen>
  );
}
