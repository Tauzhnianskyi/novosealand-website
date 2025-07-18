import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const testimonials = [
  {
    text: `I just wanted to pass on some feedback from the Master of m/v “Greenwich Eagle”. In an unpredictable shipping environment, it's important for Eagle to have trusted partners to look after our interest. We thank you for your attention to our m/v “Greenwich Eagle”.`,
    author: "Eileen Molles, Senior Operations Manager",
    company: "EAGLE SHIPPING INTERNATIONAL (USA) LLC"
  },
  {
    text: `I want to thank you for all your efforts and professional assistance rendered to us while at port of Yuzhniy, which lead to a very smooth and fruitful call...`,
    author: "Capt. Dim. G. Zarikos, Master of m/v NEW ORLEANS",
    company: "DIANA SHIPPING, May 2016, Yuzhny/Ukraine"
  },
  {
    text: `I would like to recommend NSL cleaning gang for their good job of holds cleaning. The gang you sent on board are hardworking...`,
    author: "Capt. Abner Roble Villacampa, Master of M/V ULTRA DWARKA",
    company: "ULTRABULK, July 2018"
  },
  {
    text: `I and all my crew member many thanks yr good / strong / helpful support while Genco Beauty stay at yr good port...`,
    author: "Capt. Fan Li-Ming, Master of M/V GENCO BEAUTY",
    company: "GENCO SHIPPING, April 2016, Nikolayev/Ukraine"
  },
  {
    text: `I have to say many thanks for very good cooperation and assistance to Novosealand during vessel stay in the port of Yuzhny...`,
    author: "Capt. Oleg Ternovoy, Master of M/V CONDOR",
    company: "EAGLE SHIPPING, November 2017, Yuzhny/Ukraine"
  },
  {
    text: `Sincere thanks to NSL holds washing team who, overcoming incredible difficulties, have accomplished the impossible...`,
    author: "Chief Officer of M/V NIGHTHAWK",
    company: "EAGLE SHIPPING, October 2018, Port Kavkaz/Russia"
  },
  {
    text: `We would like to say thank Novosealand for selfless help and assistance during entire call at port of Yuzhny.`,
    author: "Capt. Branislav Stanojlovic, Master of M/V SBI MAIA",
    company: "SCORPIO BULKERS, June 2018, Yuzhny/Ukraine"
  },
  {
    text: `Novosealand shore gang are very cooperative and well trained for cargo hold washing...`,
    author: "Capt. Jose D. Javelosa Jr., Master of M/V NORD INDIAN",
    company: "COFCO, October 2018, Odessa/Ukraine OPL"
  },
  {
    text: `The vessel and my personal thanks to Novosealand for all your efforts which were successful. This call was the easiest ever done in the Ukraine ports since 2002!`,
    author: "Capt. Leonard M. Roga, Master of M/V TOMINI INFINITY",
    company: "TOMINI, November 2017, Nikolayev/Ukraine"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 } // Desktop
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-text">"{t.text}"</p>
              <p className="testimonial-author">{t.author}</p>
              <p className="testimonial-company">{t.company}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
