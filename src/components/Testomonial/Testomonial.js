import React from 'react';
import './testomonial.css';
import client1 from '../../image/client1.png';
import client2 from '../../image/client2.png';
import client3 from '../../image/client3.png';
import client4 from '../../image/client4.png';

function Testomonial() {
  return (
    <div className='testomonial-container'>
      <h2 className='testomonial-heading'>Recent Customer Reviews</h2>
      <div className='testimonial-section'>
        <div className='testimonial-box'>
          <div className='client-info'>
            <img src={client1} alt='Client 1' className='client-image' />
            <h3 className='client-name'>Nikita Sahu</h3>
            <h4 className='verified'>Verified Purchase</h4>
          </div>
          <p className='testimonial-text'>Excellent... They really work well together. I liked it so much, thank you so much Bruveg.</p>
        </div>
        <div className='testimonial-box'>
          <div className='client-info'>
            <img src={client2} alt='Client 2' className='client-image' />
            <h3 className='client-name'>Mihir Das</h3>
            <h4 className='verified'>Verified Purchase</h4>
          </div>
          <p className='testimonial-text'>Excellent work. They really work well together. I liked it so much, thank you so much Bruveg.</p>
        </div>
        <div className='testimonial-box'>
          <div className='client-info'>
            <img src={client3} alt='Client 3' className='client-image' />
            <h3 className='client-name'>Ashutosh Nayak</h3>
            <h4 className='verified'>Verified Purchase</h4>
          </div>
          <p className='testimonial-text'>Superb performance and commitment to customer delight; highly impressive and recommended.</p>
        </div>
        <div className='testimonial-box'>
          <div className='client-info'>
            <img src={client4} alt='Client 4' className='client-image' />
            <h3 className='client-name'>Minakshi Datta</h3>
            <h4 className='verified'>Verified Purchase</h4>
          </div>
          <p className='testimonial-text'>Very Nice work. I like the team. They are super coordinative. Thank you.</p>
        </div>
      </div>
    </div>
  );
}

export default Testomonial;
