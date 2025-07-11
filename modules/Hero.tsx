import { RocketIcon } from "@/assets/icons";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Total from "@/components/Total";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("HeroContent");
  return (
    <section className="containers flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-start !my-[80px] px-[72px] lg:px-0">
      <div className="w-full md:max-w-[330px] lg:max-w-[490px] space-y-[30px]">
        <div className="space-y-[20px]">
          <Heading classList="!text-[38px] lg:!text-[67px] !leading-[120%] lg:!leading-[110.00000000000001%] line-clamp-3">
            {t("item1")}
          </Heading>
          <p className="leading-[160%] text-[16px] lg:text-[22px]">{t("item2")}</p>
        </div>
        <Button
          type="button"
          title={t("button")}
          variant="filled"
          icon={<RocketIcon />}
          iconPosition="left"
          extraClass="!w-full justify-center md:!w-auto"
        />
        <div className="flex items-center justify-between">
          <Total title={t("total-sale")} count="240k+" />
          <Total title={t("auctions")} count="100k+" />
          <Total title={t("artists")} count="240k+" />
        </div>
      </div>
      <div className="w-full md:w-[330px] lg:w-[510px] bg-[#3B3B3B] rounded-[20px] overflow-hidden">
        <Image
          className="object-cover w-full md:w-[330px] lg:w-[510px] h-full md:h-[221px] lg:h-[401px]"
          src={"/hero-img.png"}
          alt="hero image"
          width={510}
          height={401}
          priority
        />
        <div className="py-[22px] px-[20px] space-y-[10px]">
          <Heading classList="!text-[22px]">Space Walking</Heading>
          <div className="flex gap-[12px]">
            <Image
              className="w-[24px] h-[24px]"
              src={"/Animakid.svg"}
              alt="Animakid"
              width={24}
              height={24}
              priority
            />
            <Text classList="!text-[white]">Animakid</Text>
          </div>
        </div>
      </div>
    </section>
  );
}
