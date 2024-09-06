
import { Newsletter } from './components/Newsletter';
import { HeroSection } from './components/HeroSection';
import { ServiceCard } from './components/Services';
import { About } from './components/About';
import { Heading } from './components/Heading';
import { NavBar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Testimonial } from './components/Testimonial';

import './App.css';
import './index.css';

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />

      <About />

      <Heading heading="Services" para="We offer a range of tailored solutions to meet your needs. From innovative design to expert development, our services are designed to deliver outstanding results and elevate your project." />
      <ServiceCard />

      <Heading heading="My Projects" para="Explore our portfolio to see the diverse projects we've brought to life. Each project reflects our commitment to quality and innovation, showcasing our ability to turn ideas into successful outcomes." />
      <Projects />

      {/* <ProjectCards /> */}
      <Heading heading="Testimonials" para="Hear directly from our clients about their experience with us. Their feedback reflects our dedication to exceptional service and quality." />
      <Testimonial />

      <Newsletter />
      <Footer />

    </>
  );
}

export default App;
