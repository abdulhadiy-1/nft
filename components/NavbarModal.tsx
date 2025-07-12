"use client";
import { ArrowRightIcon, MenuIcon, UserIcon } from "@/assets/icons";
import { Link } from "@/i18n/navigation";
import LangConfig from "@/modules/Header/LangConfig";
import React, { useState } from "react";
import Button from "./Button";
import { useTranslations } from "next-intl";

const NavbarModal = () => {
  const t = useTranslations("HeadersContent")
  const [isOpen, setIsopen] = useState<boolean>(false);
  const [isOpenModal, setIsopenModal] = useState<boolean>(false);

  function handleClick(i: boolean){
    if(i){
      setIsopen(i)
      setTimeout(() => {
        setIsopenModal(i)
      }, 300);
    }else{
      setIsopenModal(i)
      setTimeout(() => {
        setIsopen(i)
      }, 300);
    }
  }

  return (
    <div className="lg:hidden">
      <button onClick={() => handleClick(true)}>
        <MenuIcon />
      </button>
      <div className={`lg:hidden fixed ${isOpen ? "left-0 right-0 top-0 bottom-0" : "left-0 right-full top-0 bottom-0"} duration-300 bg-[#ffffff67] backdrop-blur-sm`}>
        <div className={`absolute ${isOpenModal ? "h-full w-[300px]" : "h-0 w-0"} duration-300 right-0 bg-[#2b2b2b] overflow-hidden`}>
          <button className="absolute right-[20px] top-[20px]" onClick={() => handleClick(false)}>
            <ArrowRightIcon />
          </button>
            <div className="flex flex-col mt-[100px] gap-5 p-5">
              <LangConfig position="top" />
              <Link className="text-[14px] font-semibold inline-block py-3 px-5" href={"/marketplace"}>{t("navItem1")}</Link>
              <Link className="text-[14px] font-semibold inline-block py-3 px-5" href={"/rankings"}>{t("navItem2")}</Link>
              <Link className="text-[14px] font-semibold inline-block py-3 px-5" href={"/connect-wallet"}>{t("navItem3")}</Link>
              <Button title={t("button")} icon={<UserIcon />} iconPosition="left" type="button" variant="filled"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarModal;
