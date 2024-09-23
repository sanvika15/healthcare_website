import React from 'react';
import checkUpImage from './check-up.png'; // Adjust the path if needed

const HomePage = () => {
  return (
    <>
      <section style={{ backgroundColor: '#f4ffed', padding: 20 }}>
        <header style={{ backgroundColor: '#f4ffed', color: 'black', padding: 20 }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Image on the Left */}
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '1.5rem', 
              paddingTop: '10rem', 
              justifyContent: 'center', 
              position: 'relative', 
              top: '-120px', 
              left: '-130px' 
            }}>
              <img
                src={checkUpImage}
                alt="Pregnancy Care"
                style={{ width: '300px', height: 'auto', borderRadius: 10 }}
              />
            </div>

            {/* Text on the Right */}
            <article style={{ flex: 2, padding: 20 }}>
              <h1>Bridging the Digital Health Divide</h1>
              <p style={{ fontSize: 18, lineHeight: 1.5, marginBottom: 20 }}>
                "Expecting a baby? Receive expert guidance and care from the comfort of your home with our pregnancy consultation services. Our team of doctors is here to support you from pregnancy confirmation to post-delivery care. Whether it's morning sickness, fatigue, back pain, or general concerns, we provide personalized advice. Fill out our online form, and we'll schedule a convenient video consultation for you."
              </p>
            </article>
          </div>
        </header>
      </section>

      <footer style={{
        backgroundColor: '#4CAF50',
        color: '#ffffff',
        textAlign: 'center',
        padding: '.5rem 0',
      }}>
        <p>&copy; 2024 PregnancyPal. All rights reserved.</p>
        <p>Contact us: info@pregnancypal.com | +123-456-7890</p>
      </footer>
    </>
  );
};

export default HomePage;
