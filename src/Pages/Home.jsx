import Hero from '../components/Hero'
import PinnedServices from '../components/PinnedServices'
import AboutSection from '../components/AboutSection'
import ProjectsShowcase from '../components/ProjectsShowcase'
import PremiumTimeline from '../components/PremiumTimeline'
import TeamSection from '../components/TeamSection'
import PricingSection from '../components/PricingSection'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import ContactSection from '../components/ContactSection'
import ScrollToTop from '../components/ScrollToTop' 

export default function Home() {
  return (
    <>
      <Hero />
      <PinnedServices />
      <AboutSection />
      <ProjectsShowcase />
      <PremiumTimeline />
      <TeamSection />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <ScrollToTop /> 
    </>
  )
}