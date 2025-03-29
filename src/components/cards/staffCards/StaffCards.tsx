import './StaffCards.scss';
import Image from 'next/image';

interface AboutUsItem {
  id: string,
  name: string,
  position: string,
  image: string
}

interface StaffCardProps {
  aboutUsData: AboutUsItem[]
}

function StaffCards({ aboutUsData }: StaffCardProps) {

  return (
    <ul className="staff-cards">
      {aboutUsData.map(item => {
        return (
          <li className="staff-cards__item" key={item.id}>
            <Image className='staff-cards__img' src={item.image} alt={`${item.name} photo`} />
            <h2 className="staff-cards__title">{item.name}</h2>
            <span className='staff-cards__position'>{item.position}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default StaffCards;