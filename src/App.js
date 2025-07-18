import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import ScrollBlocks from './components/ScrollBlocks';
import FooterContactForm from './components/FooterContactForm';
import ImageGallery from './components/ImageGallery'
import ScrollToTopButton from "./components/ScrollToTopButton";
import WorldMap from './components/WorldMap';
import 'react-tooltip/dist/react-tooltip.css';
import Testimonials from './components/Testimonials';
import VideoSection from './components/VideoSection';

function App() {
  return (
    <div className="app">
      <NavBar />
      
      {/* Company Logo Section */}
      <div id="home" className="company-logo">
        <img 
          src={`${process.env.PUBLIC_URL}/images/logo.png`} 
          alt="Company Logo" 
          loading="lazy"
        />
        <div className="logo-stats">
          <span>Since 2011 till 2025</span>
          <span>Holds cleaning: 1000+</span>
          <span>Agency attendances: 500+</span>
          <span>Inspections: 3000+</span>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-wrapper">
  <div className="about-image">
    <img src="/images/novosealand-about.jpg" alt="About Novosealand" />
  </div>
  <div className="about-text">
    <h2>About</h2>
    <p>
      <strong>Novosealand</strong> is an independent company providing cargo & marine surveying,
      protecting agency services, port operation consultancy, maritime claims handling,
      supercargo and holds cleaning services. Our aim is to assist the ship owners, operators,
      charterers, cargo shippers/receivers, underwriters, insurance companies and other
      clients involved in sea transportation at the best performance level.
    </p>
    <p>
      We believe that accurate inspection and marine services for both ship and cargo with
      hands-on monitoring of port operations is one of the keys to cost-effective business in
      the shipping industry. No matter either our customer is shipowner or charterer, P&I club
      or insurance company, stock exchange listed conglomerate or small commodity trader,
      we understand that our first function is to be independent, comprehensive and precise
      instrument for our Client to assess real situation locally in the port.
    </p>
    <p>
      Based on this conviction, Novosealand offers a wide range of high-quality marine
      surveys, cargo inspections, vessel’s holds assessment and cleaning, port operation
      supervision and protecting agency services along the Mediterranean, Black Sea,
      Continent and Baltic coastline. With access to all major ports in the area through our
      qualified and experienced local surveyors, technicians and agents we are able to
      maintain seamless support to our Clients according to international standards and with
      understanding of the shipping business' needs.
    </p>
    <p>
      Our company’s staff consists of marine surveyors and engineers, port captains and
      agents, naval architects and claim managers having solid knowledge and practical
      experience also in ship management, operation and technical management,
      chartering, freight forwarding, maritime law, chemistry, metallurgy, geology and
      agronomy. Staff members of Novosealand are certified professionals with appropriate
      level of practical experience. Surveyors have all necessary equipment and instruments
      to perform services at up-to-date standards of the shipping industry.
    </p>
  </div>
</div>


      <VideoSection />
      <div id="gallery" className="gallery-container"><ImageGallery /></div>
      <h2 className="section-title">Our Business</h2>
<div id="ourbusiness" className="our-business-section">
  <main className="main">
    <div className="hover-box left">
      <div className="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" viewBox="0 0 24 24">
          <path d="M21 19v-2H5V5h14V3H3v18h18zM23 7H11v2h12V7zm0 4H11v2h12v-2zm0 4H11v2h12v-2z"/>
        </svg>
      </div>
      <p>
        Novosealand is an independent company focused on delivering precise and impartial support to shipping industry stakeholders such as shipowners, charterers, P&I clubs, and cargo interests.
      </p>
    </div>

    <div className="hover-box right1">
      <div className="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H7v4H4l8 8 8-8zM4 18h16v2H4z"/>
        </svg>
      </div>
      <p>
        We believe that accurate inspection services and hands-on supervision of port operations are key to ensuring cost-effective and risk-free shipping processes.
      </p>
    </div>

    <div className="hover-box left">
      <div className="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 17l-5-5h3V8h4v5h3l-5 5z"/>
        </svg>
      </div>
      <p>
        Our experienced team combines expertise in ship management, naval architecture, maritime law, chemistry, and technical operations — all backed by international certifications and modern equipment.
      </p>
    </div>

    <div className="hover-box left1">
      <div className="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
        </svg>
      </div>
      <p>
        Operating across the Mediterranean, Black Sea, Continent, and Baltic regions, we maintain seamless support through our network of qualified local surveyors, engineers, and port agents.
      </p>
    </div>
  </main>
</div>


      <h2 className="section-title">Services</h2>
      <div id="services"><ScrollBlocks /></div>
      <div id="presence"><WorldMap /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contacts"><FooterContactForm /></div>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
