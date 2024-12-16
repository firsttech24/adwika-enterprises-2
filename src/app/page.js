import React from "react";

import BannerArea from "@/components/home/bannerArea";
import ServiceArea from "@/components/home/serviceArea";
import GalleryArea from "@/components/home/galleryArea";
import FeatureArea from "@/components/home/featureArea";
import TestimonialArea from "@/components/home/testimonialArea";
import CallToActionArea from "@/components/home/callToActionArea";
import BlogArea from "@/components/home/blogArea";
import BrandsArea from "@/components/home/brandsArea";
import Header from "@/components/header";

export default function page() {
  return (
    <main>
      <Header />
      <BannerArea />
      <ServiceArea />
      <GalleryArea />
      <FeatureArea />
      <TestimonialArea />
      <CallToActionArea />
      <BlogArea />
      <BrandsArea />
    </main>
  );
}
