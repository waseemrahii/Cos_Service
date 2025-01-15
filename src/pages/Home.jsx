import React from "react";
import TestimonialSection from "../sections/Home/TestimonialSection";
import AboutSection from "../sections/Home/AboutSection";
import BlogSection from "../sections/Home/BlogSection";
import ExperienceSection from "../sections/Home/ExperienceSection";
import FeatureSection from "../sections/Home/FeatureSection";
import HomeBanner from "../sections/Home/HomeBanner";
import PartnerSection from "../sections/Home/PartnerSection";
import PortfolioSection from "../sections/Home/PortfolioSection";
import PricingSection from "../sections/Home/PricingSection";
import ServicesSection from "../sections/Home/ServicesSection";
import TeamSection from "../sections/Home/TeamSection";
import { HomeData } from "../utils/HomeData"; // Static data import
import Portfolio from "../sections/Home/PortfolioSection";

export default function Home() {
  // Extract all the necessary data from the HomeData object
  const {
    banners,
    testimonials,
    aboutContent, // Instead of fetching, we'll use static data
    blogs,
    logos,
    pricingPlans,
    portfolioItems,
    categories,
    features,
    experienceDetails,
    pricingBackground,
    experienceBackground,
    services, // Static services data
    teamMembers, // Static team members data
  } = HomeData;

  return (
    <div className="w-full">
      <HomeBanner banners={banners} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureSection features={features} />
        {aboutContent && (
          <AboutSection
            image={aboutContent.images}
            title={aboutContent.title}
            yearsOfExperience={aboutContent.yearsOfExperience} // Example: 30 years from static data
            content={aboutContent.description}
          />
        )}
        <ServicesSection services={services} />
        {/* <PortfolioSection
          portfolioItems={portfolioItems}
          categories={categories}
        /> */}
        <Portfolio />
        <ExperienceSection
          experienceDetails={experienceDetails}
          backgroundImage={experienceBackground}
        />
        <TestimonialSection testimonials={testimonials} />
        <PricingSection
          pricingPlans={pricingPlans}
          backgroundImage={pricingBackground}
        />
        <TeamSection teamMembers={teamMembers} />
        <BlogSection blogs={blogs} /> {/* Pass blogs statically */}
        <PartnerSection logos={logos} />
      </div>
    </div>
  );
}
