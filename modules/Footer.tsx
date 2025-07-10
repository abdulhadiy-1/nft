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
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="containers">
        <div className="space-y-[30px] lg:space-y-0 lg:flex justify-between border-b-[1px] border-b-[#858584] pb-[30px]">
          <div>
            <Link href={"/"} className="!mb-[30px] inline-block">
              <Image src={"/FullLogo.svg"} alt="logo" width={243} height={32} />
            </Link>
            <Text classList="mb-[20px] max-w-[230px]">
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
          <div>
            <Heading classList="mb-[25px] !text-[22px]">
              Join our weekly digest
            </Heading>
            <Text classList="mb-[20px]  max-w-[330px]">
              Get exclusive promotions & updates straight to your inbox.
            </Text>
            <div className="flex bg-white rounded-[20px] max-w-[420px] justify-between">
              <Input type="email" placeholder="Enter your email here" />
              <Button type="button" title="Subscribe" icon={<MessageIcon />} iconPosition="left" variant="filled"/>
            </div>
          </div>
        </div>
        <Text classList="my-5">Ⓒ NFT Market. Use this template freely.</Text>
      </div>
    </footer>
  );
};

export default Footer;
