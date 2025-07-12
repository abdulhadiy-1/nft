import { UserIcon } from "@/assets/icons"
import Button from "@/components/Button"
import Image from "next/image"
import LangConfig from "./LangConfig"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import NavbarModal from "@/components/NavbarModal"

const Header = () => {
  const t = useTranslations("HeadersContent")
  return (
    <header className="max-w-[1180px] px-[30px] lg:px-0 flex items-center justify-between w-full mx-auto py-5">
      <Link href={"/"}>
      <Image className="w-[182px] h-[24px] lg:w-[243px] lg:h-[32px]" priority src={"/FullLogo.svg"} alt="Logo" width={243} height={32}/>
      </Link>
      <nav className="hidden lg:flex items-center gap-2.5">
        <Link className="text-[14px] font-semibold inline-block py-3 px-5" href={"/marketplace"}>{t("navItem1")}</Link>
        <Link className="text-[14px] font-semibold inline-block py-3 px-5" href={"/rankings"}>{t("navItem2")}</Link>
        <Link className="text-[14px] font-semibold inline-block py-3 px-5" href={"/connect-wallet"}>{t("navItem3")}</Link>
        <LangConfig position="bottom" />
        <Button title={t("button")} icon={<UserIcon />} iconPosition="left" type="button" variant="filled"/>
      </nav>
      <NavbarModal />
    </header>
  )
}

export default Header