import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "~/config/lang";

export default function LanguageSelector() {
  const path = usePathname();
  const router = useRouter();

  const activeLangFromPath = path.split("/")[1];
  const [activeLang, setActiveLang] = useState(
    activeLangFromPath ?? DEFAULT_LANGUAGE,
  );

  const isEn = activeLang === SUPPORTED_LANGUAGES[0];

  function toggleLanguage() {
    if (isEn) {
      setActiveLang(SUPPORTED_LANGUAGES[1]);
    } else {
      setActiveLang(SUPPORTED_LANGUAGES[0]);
    }
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): null {
    event.preventDefault();
    toggleLanguage();
    return null;
  }

  useEffect(
    function detectLanguageChange() {
      if (activeLangFromPath === activeLang) return;

      router.push(activeLang!);
    },
    [activeLangFromPath, activeLang, router],
  );

  return (
    <button
      className="relative flex w-fit flex-row border border-white text-white"
      onClick={handleClick}
    >
      <div className="absolute inset-0.5">
        <div
          className={`absolute top-0 bottom-0 w-1/2 bg-teal-600 transition-all ${isEn ? "translate-0" : "translate-x-full"}`}
        />
      </div>
      <div className={`relative px-2`}>{SUPPORTED_LANGUAGES[0]}</div>
      <div className={`relative px-2`}>{SUPPORTED_LANGUAGES[1]}</div>
    </button>
  );
}
