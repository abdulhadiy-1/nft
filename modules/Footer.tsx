import {
  DiscordIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/assets/icons";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="containers">
        <div className="flex justify-between">
          <div>
            <Link href={"/"} className="!mb-[30px] inline-block">
              <Image src={"/FullLogo.svg"} alt="logo" width={243} height={32} />
            </Link>
            <Text classList="mb-[20px]">
              NFT marketplace UI created with Anima for Figma.
            </Text>
            <div>
              <Text classList="mb-[15px]">Join our community</Text>
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
            <Heading classList="mb-[25px] !text-[22px]">Explore</Heading>
            <Text classList="mb-[20px]">Marketplace</Text>
            <Text classList="mb-[20px]">Rankings</Text>
            <Text classList="mb-[20px]">Connect a wallet</Text>
          </div>
          <div className="w-[330px]">
            <Heading classList="mb-[25px] !text-[22px]">Join our weekly digest</Heading>
            <Text classList="mb-[20px]">Get exclusive promotions & updates straight to your inbox.</Text>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
