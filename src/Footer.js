import React from 'react'
import './footer.css'
import logoC from './image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import visa from './image/visa.png'
import mastercard from './image/mastercard.png'
import upi from './image/upi.png'
import rupay from './image/rupay.png'

function Footer() {
  return (
    <div>
      <div className='happy'>
      <h1>Make Someone Happy Today</h1>


      <div className="logo-container">
  <div className="logo-section">
    <img src={logoC} alt='logo' className='logo-img' />
  </div>
  <div className="follow-section">
  <p>Follow Us</p>
  <div className="social-icons">
      <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998' }} />
      </a>
      <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2' }} />
      </a>
      <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} style={{ color: '#c13584' }} />
      </a>
      <a href="https://www.pinterest.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faPinterest} style={{ color: '#bd081c' }} />
      </a>
      <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} style={{ color: '#ff0000' }} />
      </a>
      <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077b5' }} />
      </a>
    </div>
</div>
<div className="payment-section">
      <p>Payment Methods</p>
      <div className="payment-icons">
        <img src={visa} alt="Visa" />
        <img src={mastercard} alt="Mastercard" />
        <img src={rupay} alt="Rupay" />
        <img src={upi} alt="UPI" />
       
      </div>
    </div>


    
</div>

      </div>

      <div className="footer-container">
      <div className="footer-links">
        <span>Blog</span>
        <span>|</span>
        <span>Privacy Policy</span>
        <span>|</span>
        <span>Refund & Return</span>
        <span>|</span>
        <span>About us</span>
        <span>|</span>
        <span>FAQs</span>
        <span>|</span>
        <span>T&C</span>
        <span>|</span>
        <span>Monday to Saturday (11 AM to 7 PM)</span>
        <span>|</span>
        <span>8847818095</span>
      </div>
    </div>

    <div className="copyright-section">
      <p>
        Copyright
        <span>
          &copy;&nbsp;
        </span>
        2020-2024, bruveg.com, All Rights Reserved.
      </p>
    </div>
    </div>
  )
}

export default Footer
