import './App.css'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <button onClick={() => scrollToSection('about-us')}>About us</button>
        <button onClick={() => scrollToSection('our-services')}>Our Services</button>
        <button onClick={() => scrollToSection('contact-us')}>Contact us</button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="main-title">Heart of Humanity</h1>
        <h2 className="subtitle">AI Safety for Everyone</h2>
        <img src="/temp_logo.png" alt="Heart of Humanity Logo" className="logo" />
      </section>

      {/* About Us Section */}
      <section id="about-us" className="content-section">
        <h2 className="section-title">About us</h2>
        <div className="text-box">
          <p>The world is currently in the midst of the biggest technological revolution since the invention of the internet, AI is drastically reshaping every aspect of society and our daily lives. Employment, education, healthcare, personal relationships, the news, energy and water consumption, and war have already been deeply affected by the rise of AI over the last 5 years. This rapidly moving, uncertain landscape can be extremely difficult and scary to navigate for ordinary people. Here at Heart of Humanity, our goal is to educate the general public on the risks posed by AI and how they can protect themselves, their communities and their businesses. We also hope to empower people to take action in influencing AI legislation and policy, so that this incredibly powerful tool can benefit all of humanity instead of spelling our downfall.</p>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="our-services" className="content-section">
        <h2 className="section-title">Our Services</h2>
        <div className="text-box">
          <p className="coming-soon">COMING SOON</p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="content-section">
        <h2 className="section-title">Contact us</h2>
        <div className="contact-info">
          <p>email: elijahdy0719@gmail.com</p>
          <p>phone: +447452981347</p>
        </div>
      </section>
    </div>
  )
}

export default App
