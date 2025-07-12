import Heading from "@/components/Heading";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Learning = () => {
  const t = useTranslations("LearningContent");
  const cards = [
    {
      id: 1,
      img: "/wallet.svg",
      title: t("card1item"),
      text: t("card1text"),
    },
    {
      id: 2,
      img: "/collection.svg",
      title: t("card2item"),
      text: t("card2text"),
    },
    {
      id: 3,
      img: "/earn.svg",
      title: t("card3item"),
      text: t("card3text"),
    },
  ];
  return (
    <section className="my-[80px]">
      <div className="containers">
        <div className="mb-[48px]">
          <Heading>{t("item1")}</Heading>
          <p className="text-[22px]">{t("item2")}</p>
        </div>
        <div className="flex flex-wrap  justify-between">
          {cards.map((item) => (
            <div
              key={item.id}
              className="bg-[var(--clr-grey)] rounded-[20px] text-center space-y-[10px] w-[330px] h-[439px] px-[30px]"
            >
                <Image src={item.img} alt={item.title} width={250} height={250} priority className="w-[250px] h-[250px] mx-auto my-[10px]"/>
                <Heading classList="!text-[22px]">{item.title}</Heading>
                <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;
