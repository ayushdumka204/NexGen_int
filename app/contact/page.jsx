"use client";

import React from 'react';

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#f4f7f9', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Header Placeholder (Updated with Bold Title and Subtitle) */}
      <div style={{ background: '#fff', padding: '25px 0', borderBottom: '1px solid #eee', textAlign: 'center' }}>
        <div style={{ color: '#2c1161', fontSize: '28px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '5px' }}>
          CONTACT US
        </div>
        <div style={{ color: '#666', fontSize: '16px', fontWeight: '500' }}>
          Get in Touch with Our Experts
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '50px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
          
          {/* LEFT SIDE: FORM SECTION */}
          <div style={{ flex: '1 1 650px', background: '#fff', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '4px' }}>
            <div style={{ marginBottom: '30px' }}>
              <p style={{ color: '#2c1161', fontSize: '14px', fontWeight: '600', margin: '0 0 5px 0' }}>
                Let’s Connect With NexGen
              </p>
              <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#333', margin: '0' }}>
                Tell Us About Your Requirements
              </h2>
            </div>

            <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <input type="text" placeholder="Company Name" style={inputStyle} />
              <input type="text" placeholder="Business/Survey Requirement/ Enquiry" style={inputStyle} />
              
              <input type="text" placeholder="Full Name" style={inputStyle} />
              <input type="email" placeholder="Email address" style={inputStyle} />
              
              <div style={{ gridColumn: 'span 2', display: 'flex', gap: '10px' }}>
                <input type="text" placeholder="Phone" style={{ ...inputStyle, flex: 1 }} />
                <input type="text" placeholder="City" style={{ ...inputStyle, flex: 1 }} />
                <input type="text" placeholder="State" style={{ ...inputStyle, flex: 1 }} />
              </div>

              <textarea placeholder="Message" style={{ ...inputStyle, gridColumn: 'span 2', height: '150px', resize: 'none' }}></textarea>
            
              <button type="submit" style={buttonStyle}>
                REQUEST ESTIMATE
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: GET IN TOUCH INFO */}
          <div style={{ flex: '1 1 300px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#222', marginBottom: '30px' }}>Get in Touch</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={infoCardStyle}>
                <h3 style={infoTitleStyle}>Office Location</h3>
                <p style={infoTextStyle}>
                 A 26, Block B, Mohan Cooperative Industrial Estate, New Delhi, Delhi 110044
                </p>
              </div>

              <div style={infoCardStyle}>
                <h3 style={infoTitleStyle}>Email</h3>
                <p style={infoTextStyle}>
                  {/* Clickable Email */}
                  <a href="mailto:mail@nexgenint.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    mail@nexgenint.com
                  </a>
                </p>
              </div>

              <div style={infoCardStyle}>
                <h3 style={infoTitleStyle}>Call Us</h3>
                <p style={infoTextStyle}>
                  {/* Clickable Phone */}
                  <a href="tel:+919873177449" style={{ color: 'inherit', textDecoration: 'none' }}>
                    +91-98731 77449
                  </a>
                </p>
              </div>

              <div style={infoCardStyle}>
                <h3 style={infoTitleStyle}>Website</h3>
                <p style={infoTextStyle}>
                  <a href="https://www.nexgenint.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    www.nexgenint.com
                  </a>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* FOOTER SECTION */}
      <div style={{ background: '#fff', padding: '60px 0', textAlign: 'center', marginTop: '50px' }}>
         <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '10px' }}>Trusted by 500+ Global Brands</h2>
         <p style={{ color: '#666' }}>We’ve Delivered 3,000+ Market Research Projects That Empower Businesses to Grow.</p>
      </div>

    </div>
  );
}

// Inline Styles for reuse
const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  border: '1px solid #ccc',
  borderRadius: '2px',
  fontSize: '14px',
  outline: 'none',
  backgroundColor: '#fff'
};

const buttonStyle = {
  gridColumn: 'span 2',
  backgroundColor: '#1e266d',
  color: '#fff',
  padding: '15px',
  border: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '10px',
  borderRadius: '2px',
  transition: '0.3s'
};

const infoCardStyle = {
  background: '#fff',
  padding: '25px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  borderRadius: '4px',
  borderLeft: '5px solid #1e266d'
};

const infoTitleStyle = {
  fontSize: '18px',
  fontWeight: '700',
  margin: '0 0 10px 0',
  color: '#333'
};

const infoTextStyle = {
  fontSize: '14px',
  color: '#666',
  lineHeight: '1.6',
  margin: '0'
};