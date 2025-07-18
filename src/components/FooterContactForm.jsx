import React, { useState } from 'react';
import './FooterContactForm.css';

function FooterContactForm() {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or inquiries,<br />
            feel free to reach out to us directly.
          </p>
          <p><strong>Email:</strong> <a href="mailto:info@novosealand.com">info@novosealand.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+380935272052">+380 93 527 2052</a></p>
        </div>

        <div className="footer-certifications-box">
          <p className="footer-certifications-title">
            The works are carried out in accordance with requirements of the following Maritime Institutions:
          </p>
          <div className="certification-logos-grid">
            <img src="/images/certifications/bimco.png" alt="BIMCO" />
            <img src="/images/certifications/helthcare.png" alt="Healthcare" />
            <img src="/images/certifications/femas.png" alt="FEMAS" />
            <img src="/images/certifications/consulting.png" alt="Consulting" />
            <img src="/images/certifications/royal-maritime.png" alt="Royal Maritime" />
            <img src="/images/certifications/maritime-surv.png" alt="Maritime Surveillance" />
            <img src="/images/certifications/BV.png" alt="Bureau Veritas" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterContactForm;