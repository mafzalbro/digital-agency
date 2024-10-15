import HeroSection from '../components/homepage/HeroSection';
import AboutSection from '../components/homepage/AboutSection';
import ServicesSection from '../components/homepage/ServicesSection';
import TestimonialsSection from '../components/homepage/TestimonialsSection';
import CallToAction from '../components/homepage/CallToAction';
import SlidingText from '../components/homepage/SlidingText';

const LandingPage = () => (
  <>
    <HeroSection />
    <SlidingText />
    <AboutSection />
    <ServicesSection />
    <TestimonialsSection />
    <CallToAction />
  </>
);

export default LandingPage;
