"use client";
import { RuIcon, UsIcon, UzIcon } from "@/assets/icons";
import { usePathname, useRouter } from "@/i18n/navigation";
import { getCookie } from "cookies-next";
import React, { useEffect, useMemo, useState } from "react";

const langs = [
  { id: 1, icon: <RuIcon />, title: "ru", content: "Ру" },
  { id: 2, icon: <UzIcon />, title: "uz", content: "O'z" },
  { id: 3, icon: <UsIcon />, title: "en", content: "En" },
];

const LangConfig = ({position}:{position: 'top' | 'bottom'}) => {
  const router = useRouter();
  const pathname = usePathname();

  const b = getCookie("NEXT_LOCALE");
  useEffect(() => {
    if (b == "uz" || b == "ru" || b == "en") {
      const findLang = langs.find((item) => item.title == b);

      if (findLang) setActiveId(findLang?.id);
    }
  }, []);
  const [activeId, setActiveId] = useState(1);

  const activeLang = useMemo(
    () => langs.find((lang) => lang.id === activeId),
    [activeId]
  );

  function handleChangeLang(id: number) {
    const selectedLang = langs.find((lang) => lang.id === id);
    if (selectedLang) {
      setActiveId(id);
      router.push(pathname, { locale: selectedLang.title });
    }
  }

  return (
    <div className="lang-wrapper pr-3 relative cursor-pointer">
      <div className="flex items-center gap-2 font-semibold  text-[16px]">
        <div className="flex items-center justify-center rounded-full overflow-hidden">
          {activeLang?.icon}
        </div>
        <span>{activeLang?.content}</span>
      </div>

      <div className={`h-0 lang-popup overflow-hidden duration-300 space-y-1 absolute ${position == 'top'? "bottom-[24px]" : "top-[24px]"} left-[-15px] rounded-md bg-[var(--clr-violet)]`}>
        {langs
          .filter((lang) => lang.id !== activeId)
          .map((lang) => (
            <div
              key={lang.id}
              onClick={() => handleChangeLang(lang.id)}
              className="flex hover:bg-white hover:text-[var(--clr-violet)] p-2 rounded-md items-center gap-2 font-semibold  text-[16px]"
            >
              <div className="flex items-center justify-center rounded-full overflow-hidden">
                {lang.icon}
              </div>
              <span>{lang.content}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LangConfig;
