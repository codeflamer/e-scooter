import { Button } from "antd";
import React from "react";
import CTA from "./cta";
import FooterContent from "./footer-content";

const Footer = () => {
  return (
    <>
      <section className="bg-base text-white">
        <CTA />
      </section>
      <section className="bg-[#F4F7FB]">
        <FooterContent />
      </section>
    </>
  );
};

export default Footer;
