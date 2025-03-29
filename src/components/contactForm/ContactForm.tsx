import './ContactForm.scss';

function ContactForm() {

  return (
    <form className="contact__form">
      <div className="contact__services">
        <h3>Select Services</h3>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" name="service" value="website-development" />
            Website Development
          </label>
          <label>
            <input type="checkbox" name="service" value="seo" />
            SEO Optimization
          </label>
          <label>
            <input type="checkbox" name="service" value="social-media-marketing" />
            Social Media Marketing
          </label>
          <label>
            <input type="checkbox" name="service" value="advertising" />
            Advertising
          </label>
        </div>
      </div>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
      ></textarea>
      <div>
        <button className='contact__button button-secondary' type="submit">Send Message</button>
      </div>
    </form>
  )
}

export default ContactForm;