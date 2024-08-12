import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ReactQueryProvider from "@/lib/react-query-provider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { jost } from "./font";

export const metadata: Metadata = {
  title: "Scooter E-commerce",
  description: "Selling of amazing scooter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <ReactQueryProvider>
          <AntdRegistry>
            <Header />
            {children}
            <Footer />
          </AntdRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
