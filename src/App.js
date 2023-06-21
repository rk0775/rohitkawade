import './App.css';
import Common from './portfolioFiles/Common/Common';
import Navbar from './portfolioFiles/Navbar/Navbar';
import Footer from './portfolioFiles/WebFooter/Footer';
import AboutMe from './portfolioFiles/aboutMe/AboutMe';
import ContactMe from './portfolioFiles/contactMe/ContactMe';
import Home from './portfolioFiles/home/Home';
import Resume from './portfolioFiles/resume/Resume';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Common title="About Me" subtitle="Why Choose Me?" id="about-component"/>
      <AboutMe/>
      <Common title="Resume" subtitle="My Formal Bio Details" id="resume-component"/>
      <Resume/>
      <Common title="Contact Me" subtitle="Lets Keep In Touch" id="contact-component"/>
      <ContactMe/>
      <Footer/>
    </>
  );
}

export default App;
