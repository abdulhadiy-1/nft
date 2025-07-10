import { RocketIcon } from "@/assets/icons";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Total from "@/components/Total";

export default function Home() {
  return (
    <main className="containers flex items-start">
      <div className="max-w-[490px] space-y-[30px]">
        <div className="space-y-[20px]">
                  <Heading classList="!text-[67px] !leading-[110.00000000000001%]">Discover digital art & Collect NFTs</Heading>
                <p className="leading-[160%] text-[22px]">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
        </div>
        <Button type="button" title="Get Started" variant="filled" icon={<RocketIcon />} iconPosition="left" />
        <div className="flex items-center justify-between">
          <Total title="Total Sale" count="240k+"/>
          <Total title="Auctions" count="100k+"/>
          <Total title="Artists" count="240k+"/>
        </div>
      </div>
      <div className=""></div>
    </main>
  );
}
