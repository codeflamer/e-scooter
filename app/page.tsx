import BannerDelivery from "@/components/banner-delivery";
import BannerShowCase from "@/components/banner-showcase";
import Benefits from "@/components/benefits";
import BigBanner from "@/components/big-banner";
import {
  ArrowRightOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="mt-[21px]" />
      <BigBanner />
      <div className="mt-[35px]" />
      <Benefits />
      <div className="mt-[81px]" />
      <BannerShowCase />
      <div className="mt-[21px]" />
      <BannerDelivery />
      <div className="mt-[21px]" />
    </main>
  );
}
