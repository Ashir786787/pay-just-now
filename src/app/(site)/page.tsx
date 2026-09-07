import Hero from "@/components/home/Hero";
import ShopNowPayClever from "@/components/home/ShopNowPayClever";
import WhyChooseClever from "@/components/home/WhyChooseClever";
import FeaturedStores from "@/components/home/FeaturedStores";
import FeaturedDeals from "@/components/home/FeaturedDeals";
import CustomerReviews from "@/components/home/CustomerReviews";
import GetTheApp from "@/components/home/GetTheApp";
import BrowseAllStores from "@/components/home/BrowseAllStores";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - PayJustNow",
};

export default function HomePage() {
  return (
    <div id="shopper_home">
      <Hero />
      <ShopNowPayClever />
      <WhyChooseClever />
      <FeaturedStores />
      <FeaturedDeals />
      <CustomerReviews />
      <GetTheApp />
      <BrowseAllStores />
    </div>
  );
}
