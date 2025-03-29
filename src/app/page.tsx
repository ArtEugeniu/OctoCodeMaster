import '../styles/Home.scss';
import Hero from '@/components/hero/Hero';
import Services from '@/components/sections/services/Services';
import AboutUs from '@/components/sections/aboutUs/AboutUs';
import ContactUs from '@/components/sections/contactUs/ContactUs';
import Footer from '@/components/footer/Footer';

function Home() {
  return(
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home;