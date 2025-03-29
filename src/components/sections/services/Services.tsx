import './Services.scss';
import ServicesData from '@/data/services-data';
import ServicesCard from '@/components/cards/servicesCards/ServicesCards';

function Services() {
  return(
    <section className="services section-primary">
      <div className="container">
        <h2 className="services__title title-primary">Services</h2>
          <ServicesCard servicesData={ServicesData.service} />
      </div>
    </section>
  )
}

export default Services;