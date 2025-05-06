import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  
  // Create an array of 15 certificates
  const certificates = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    name: `Certificate ${index + 1}`,
    image: `/cert (${index + 1}).jpeg`
  }));

  const viewCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <Navbar />
      <div className="certificate-section">
        <div className="certificate-container">
          <h1 className="section-title">My Certificates</h1>
          <p className="certificate-intro">
            Here are the certificates I've earned from Simplilearn and other educational platforms.
          </p>
          
          <div className="certificate-grid">
            {certificates.map((cert) => (
              <div className="certificate-card" key={cert.id} onClick={() => viewCertificate(cert)}>
                <div className="certificate-image">
                  <img src={cert.image} alt={cert.name} />
                </div>
                <div className="certificate-content">
                  <h2>{cert.name}</h2>
                  <button className="view-certificate">View Certificate</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div className="certificate-modal-overlay" onClick={closeModal}>
            <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal" onClick={closeModal}>×</button>
              <h2>{selectedCert.name}</h2>
              <div className="modal-image-container">
                <img src={selectedCert.image} alt={selectedCert.name} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Certificate;