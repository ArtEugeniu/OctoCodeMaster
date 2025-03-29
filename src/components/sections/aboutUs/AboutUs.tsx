import './AboutUs.scss';
import aboutUs from '@/data/aboutUs-data';
import StaffCards from '@/components/cards/staffCards/StaffCards';




function AboutUs() {

  return(
    <section className="about section-primary">
      <div className="container">
        <h2 className="about__title title-primary">About Us</h2>
        <StaffCards aboutUsData={aboutUs.aboutUs} />
      </div>
    </section>
  )
}

export default AboutUs;