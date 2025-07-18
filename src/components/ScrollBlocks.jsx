import React, { useEffect, useState } from 'react';
import './ScrollBlocks.css';

const blocks = [
  {
    title: "Protective Agency Service",
    text: `Our Protective Agency service ensures your interests are safeguarded at every stage of port operations. Acting exclusively on behalf of shipowners, charterers, or cargo receivers, we provide independent oversight and professional coordination to secure smooth and transparent port calls.

Our key responsibilities include:

- Full oversight of port operations — from vessel arrival to departure, including supervision of cargo handling, formalities, and turnaround;
- Cost control and transparency — vigilant monitoring of disbursement accounts (DA) and related charges;
- Effective communication — seamless coordination with port authorities, terminal operators, cargo interests, stevedores, and others;
- Proactive issue resolution — early identification and resolution of risks during port stay.`,
    image: "/images/agency.jpg"
  },
  {
    title: "Port Captain Attendance and Coordination",
    text: `Our Port Captain service provides on-site supervision and expert coordination to ensure your vessel’s port call is executed safely, efficiently, and in full compliance.

Key responsibilities include:

- Pre-arrival planning and documentation checks;
- Onboard attendance during cargo operations;
- Coordination with all involved parties;
- Real-time reporting;
- Support in resolving challenges and minimizing turnaround time.`,
    image: "/images/port-captain.jpg"
  },
  {
    title: "Marine Surveys",
    text: `We provide a full range of independent marine surveys, carried out by experienced surveyors to support your operational, commercial, and legal needs.

Services include:

- On/Off-Hire Condition Survey
- Bunker Survey
- Draft Survey
- Holds Condition Survey
- Cleaning of Holds
- Cargo Cranes and Gear Inspection
- Pre-Purchase Inspection
- Hull and Machinery Damage Survey`,
    image: "/images/marine.jpg"
  },
  {
    title: "Holds Cleaning",
    text: `Professional cargo holds cleaning up to grain standard: en-route and in port.

Why choose us:

- Teams of certified industrial climbers, trained for marine rope-access operations
- Access to hard-to-reach areas using the latest innovations in climbing technology
- All residues removed — from cement and ore to coal and petcoke
- Cleaning methods: high-pressure washing, scraping and painting (if needed)
- Strict safety compliance: PPE, lifelines, fall arresters, certified ropes and trusted climbing gears 
- Foremen are engineers: we coordinate closely with crew and optimize time/resources on board
- Global attendance
- Trusted by top shipowners, operators, charterers, and P&I clubs

We turn any bulk carrier into a grain-ready vessel within the shortest time possible`,
    image: "/images/cleaning.jpg"
  }
];

export default function ScrollBlocks() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleIndexes = [];
      const elements = document.querySelectorAll('.scroll-box');
      elements.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          newVisibleIndexes.push(i);
        }
      });
      setVisibleIndexes(newVisibleIndexes);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="scroll-section">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`scroll-box ${visibleIndexes.includes(index) ? 'visible' : ''} ${index % 2 === 0 ? 'from-left' : 'from-right'}`}
        >
          <img
            src={block.image}
            alt={block.title}
            className="scroll-img"
            loading="lazy"
          />
          <div className="scroll-box-content">
            <h3>{block.title}</h3>
            <p>{block.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
