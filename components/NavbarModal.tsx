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
      }, 500);
    }else{
      setIsopenModal(i)
      setTimeout(() => {
        setIsopen(i)
      }, 500);
    }
  }

  return (
    <div>
      <button className="lg:hidden" onClick={() => handleClick(true)}>
        <MenuIcon />
      </button>
      <div className={`lg:hidden fixed ${isOpen ? "left-0 right-0 top-0 bottom-0" : "left-0 right-full top-0 bottom-0"} duration-500 bg-[#ffffff67] backdrop-blur-sm`}>
        <div className={`absolute ${isOpenModal ? "w-[300px]" : "w-0"} duration-500 h-full right-0 bg-[#2b2b2b] overflow-hidden`}>
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
