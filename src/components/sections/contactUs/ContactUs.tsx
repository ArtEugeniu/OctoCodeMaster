import './ContactUs.scss';
import ContactForm from '@/components/contactForm/ContactForm';

function ContactUs() {

  return (
    <section className="contact section-primary">
      <div className="container">
        <h2 className="contact__title title-primary">Contact Us</h2>
        <ContactForm />
        <ul className="contact__info">
          <li className='contact__item'>
            <a className='contact__item--tel' href="tel:+37362120948">Tel: +37362120948</a>
          </li>
          <li className='contact__item'>
            <a className='contact__item--mail' href="mailto:artemieff96@gmail.com">Em@il: artemieff96@gmail.com</a>
          </li>
          <li className='contact__item'>
            <a className='contact__item--telegram' href="mailto:artemieff96@gmail.com">Telegram: artemieff96</a>
          </li>
        </ul>

      </div>
    </section>
  )
}

export default ContactUs;