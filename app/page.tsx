import BannerDelivery from "@/components/banner-delivery";
import BannerShowCase from "@/components/banner-showcase";
import Benefits from "@/components/benefits";
import BigBanner from "@/components/big-banner";
import DisplayGoods from "@/components/display-goods";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <main className="">
      <div className="mt-[21px]" />
      <BigBanner />
      <div className="mt-[35px]" />
      <Benefits />
      <div className="mt-[50px]" />
      <DisplayGoods />
      <div className="mt-[81px]" />
      <BannerShowCase />
      <div className="mt-[30px]" />
      <BannerDelivery />
      <div className="mt-[50px]" />
      <Reviews />
      <div className="mt-[100px]" />
    </main>
  );
}
