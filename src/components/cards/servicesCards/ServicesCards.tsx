import './ServicesCards.scss';

interface Service {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
}

interface ServiceDataProps {
  servicesData: Service[]
}

function ServicesCard({ servicesData }: ServiceDataProps) {
  return (
    <ul className='services-card'>
      {servicesData.map(item => {
        return (
          <li className="services-card__item" key={item.id}>
            <h2 className="services-card__title">{item.title}</h2>
            <p className="services-card__price">{item.price}</p>
            <p className="services-card__duration">{item.duration}</p>
            <p className="services-card__description">{item.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default ServicesCard;