"use client";
import CategoryPage from "@/components/Category/CategoryPage";
import Header from "@/components/Header";
import OfferAnnouncement from "@/components/Home/AnnouncementBar/OfferAnnouncement";
import SaleAnnouncement from "@/components/Home/AnnouncementBar/SaleAnnouncement";
import React from "react";

const CategoryListing = () => {
  return (
    <div>
      <Header />
      <SaleAnnouncement />
      <CategoryPage />
    </div>
  );
};

export default CategoryListing;
