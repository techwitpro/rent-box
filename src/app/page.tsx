import Banner from '../components/sections/Banner';
import Compare from '../components/sections/Compare';
import Features from '../components/sections/Features';
import Highlight from '../components/sections/Highlight';
import Gallery from '../components/sections/Gallery';
import About from '../components/sections/About';
import WorkProcess from '../components/sections/WorkProcess';
import MarketingSection from '../components/sections/MarketingSection';
import HeroVideo from '../components/sections/HeroVideo';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';
import AdviceSection from '@/components/sections/AdviceSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <Compare />
      <Features />
      <Highlight />
      <Gallery />
      <About />
      <WorkProcess />
      <MarketingSection />
      <HeroVideo />
      <Compare />
      <AdviceSection />
    </div>
  );
}
