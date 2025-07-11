import {
  DiscordIcon,
  InstagramIcon,
  MessageIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/assets/icons";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Text from "@/components/Text";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("FootersContent")

  return (
    <footer className="bg-[var(--clr-grey)] py-[40px]"> 
      <div className="containers">
        <div className="space-y-[30px] lg:space-y-0 lg:flex justify-between border-b-[1px] border-b-[#858584] pb-[30px]">
          <div>
            <Link href={"/"} className="!mb-[30px] inline-block">
              <Image src={"/FullLogo.svg"} alt="logo" width={243} height={32} />
            </Link>
            <Text classList="mb-[20px] max-w-[230px]">
              {t("item1")}
            </Text>
            <div>
              <Text classList="mb-[15px]">{t("item2")}</Text>
              <div className="flex items-center gap-[10px]">
                <Link href={"/"}>
                  <DiscordIcon />
                </Link>
                <Link href={"/"}>
                  <YouTubeIcon />
                </Link>
                <Link href={"/"}>
                  <TwitterIcon />
                </Link>
                <Link href={"/"}>
                  <InstagramIcon />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Heading classList="mb-[25px] !text-[22px]">{t("item3")}</Heading>
            <Text classList="mb-[20px]">{t("item4")}</Text>
            <Text classList="mb-[20px]">{t("item5")}</Text>
            <Text classList="mb-[20px]">{t("item6")}</Text>
          </div>
          <div className="max-w-[425px]">
            <Heading classList="mb-[25px] !text-[22px] ">
              {t("item7")}
            </Heading>
            <Text classList="mb-[20px]  max-w-[330px]">
              {t("item8")}
            </Text>
            <div className="flex bg-white rounded-[20px] max-w-[420px] justify-between">
              <Input type="email" placeholder={t("inpItem")} />
              <Button type="button" title={t("button")} icon={<MessageIcon />} iconPosition="left" variant="filled"/>
            </div>
          </div>
        </div>
        <Text classList="my-5">{t("item9")}</Text>
      </div>
    </footer>
  );
};

export default Footer;
