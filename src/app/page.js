"use client";
import React from "react";
import SaleAnnouncement from "@/components/Home/AnnouncementBar/SaleAnnouncement";
import OfferAnnouncement from "@/components/Home/AnnouncementBar/OfferAnnouncement";
import ShopByCategory from "@/components/Home/ShopByCategory";
import DownloadBanner from "@/components/Home/DownloadBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Home/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <SaleAnnouncement />
      <OfferAnnouncement />
      <Banner />
      <ShopByCategory />
      <DownloadBanner />
      <Footer />
    </div>
  );
};

export default Home;
("");
