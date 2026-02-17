"use client";

import LanguageSelector from "./language-selector";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 left-0 border-b border-gray-500 px-4 py-2 z-40">
      <div className="container m-auto flex flex-row justify-between">
        <h1> Daniel Ishigaki</h1>
        <LanguageSelector />
      </div>
    </div>
  );
}
