import React from 'react';

const HomePage = () => {
  return (
    <section style={{ backgroundColor: '#eaffde', padding: 20 }}>
      <header style={{ backgroundColor: '#eaffde', color: 'black', padding: 20 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
          <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
            <h1>Bridging the Digital Health Divide</h1>
            <p style={{ fontSize: 18, lineHeight: 1.5, marginBottom: 20 }}>
              "Expecting a baby? Get expert guidance and care from the comfort of your own home with our pregnancy consultation services. Our team of experienced doctors and medical specialists are here to support you every step of the way, from confirming your pregnancy to post-delivery care. Whether you're experiencing morning sickness, fatigue, or back pain, or simply have questions about your pregnancy, we're here to provide personalized advice and reassurance. Simply fill out our online form, and our team will get back to you to schedule a convenient video consultation at a time that suits you."
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVUMsFo4QWbJ5ElgbitAQlZcx0O87L0E4Ww&s" alt="Image 1" style={{ width: 100, height: 100, marginRight: 10 }} />
              <img src="image2.jpg" alt="Image 2" style={{ width: 100, height: 100, marginRight: 10 }} />
              <img src="image3.jpg" alt="Image 3" style={{ width: 100, height: 100, marginRight: 10 }} />
              <img src="image4.jpg" alt="Image 4" style={{ width: 100, height: 100, marginRight: 10 }} />
              <img src="image5.jpg" alt="Image 5" style={{ width: 100, height: 100 }} />
            </div>
          </article>
        </div>
      </header>
    </section>
  );
};

export default HomePage;