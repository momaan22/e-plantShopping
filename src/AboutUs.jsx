import React from 'react';

function AboutUs() {
  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        width: '100%',
    },
    heading: {
        color: '#4CAF50', /* العنوان أخضر */
        fontSize: '3rem',
        marginBottom: '30px',
    },
    description: {
        fontSize: '1.3rem',
        marginBottom: '20px',
        lineHeight: '1.6',
        maxWidth: '900px',
        
        /* التعديل هنا: خلينا اللون أسود وشيلنا الضل */
        color: 'black', 
        fontWeight: '500', /* تقلنا الخط سِنة بسيطة عشان يوضح */
        
        padding: '0 20px',
    }
  };

  return (
    <div style={styles.container}>
        <h1 style={styles.heading}>About Us</h1>
        
        <div style={styles.description}>
            <p>Welcome to Paradise Nursery, where green meets serenity!</p>
            <br/>
            <p>
            At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of 
            high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and 
            more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every 
            plant enthusiast.
            </p>
            <br/>
            <p>
            Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. 
            Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of 
            the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your 
            home or office.
            </p>
            <br/>
            <p style={{fontWeight: 'bold', marginTop: '20px', color: '#4CAF50'}}>
            Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the 
            beauty of nature right at your doorstep.
            </p>
        </div>
    </div>
  );
}

export default AboutUs;