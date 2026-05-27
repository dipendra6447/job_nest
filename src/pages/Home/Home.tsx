import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import CategorySection from '../../components/CategorySection/CategorySection';
import TrendingJobs from '../../components/TrendingJobs/TrendingJobs';
import StatsBanner from '../../components/StatsBanner/StatsBanner';
import PromotionCards from '../../components/PromotionCards/PromotionCards';
import SpecialPromotions from '../../components/SpecialPromotions/SpecialPromotions';
import DiscoverJobs from '../../components/DiscoverJobs/DiscoverJobs';
import HiringBanner from '../../components/HiringBanner/HiringBanner';
import BlogSection from '../../components/BlogSection/BlogSection';
import BrowseJobs from '../../components/BrowseJobs/BrowseJobs';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategorySection />
        <TrendingJobs />
        <StatsBanner />
        <PromotionCards />
        <SpecialPromotions />
        <DiscoverJobs />
        <HiringBanner />
        <BlogSection />
        <BrowseJobs />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
