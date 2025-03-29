import './Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content-block">
          <h1 className="hero__title">
            Transforming Ideas into Stunning Digital Experiences
          </h1>
          <p className="hero__text">
            Welcome to Octocode, where we turn your digital dreams into reality. Our expertise in web development, social media marketing, and targeted advertising ensures your brand stands out online.
          </p>
          <button className='hero__button button-primary'>Get Started</button>
          <button className='hero__button button-secondary'>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero;