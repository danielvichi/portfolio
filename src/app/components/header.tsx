"use client";

import LanguageSelector from "./language-selector";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 left-0  border-b border-gray-500 px-4 py-2">
      <div className="container flex flex-row justify-between m-auto">
      HEADER
      <LanguageSelector />
      </div>
    </div>
  );
}
