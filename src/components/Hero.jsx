import dpImage from '../dp.jpg'; // Make sure the path is correct

const Hero = () => {
  return (
    <header className="hero" id="home">
      <div className="hero-content">
        <img
          src={dpImage}
          alt="Aswin"
          className="profile-pic"
        />
        <h1>Hi, I'm Aswin G Nair</h1>
        <p>Software Developer</p>
        <div className="hero-buttons">
          <a href="#contact" className="hero-btn primary">Get in Touch</a>
          <a href="/aswinresume.pdf" download className="hero-btn secondary">Download Resume</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
