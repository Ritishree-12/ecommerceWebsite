import React, { useState } from 'react';
import axios from 'axios';
import './support.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 


function SupportForm() {
  const phoneNumber = '8847818095'; // Replace with your phone number

  const handleWhatsappClick = () => {
    // Replace the placeholder number with your WhatsApp number in international format
    window.open('https://wa.me/8455907989', '_blank'); 
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };



  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Perform validation based on the field name
    if (name === 'name') {
      // Allow only alphabets and spaces in the name field
      updatedValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'email') {
      // Allow alphabets, numbers, @, and . in the email field
      updatedValue = value.replace(/[^a-zA-Z0-9@.]/g, '');
    } else if (name === 'phone') {
      // Allow only numbers in the phone field
      updatedValue = value.replace(/[^0-9]/g, '');
    }

    setFormData({
      ...formData,
      [name]: updatedValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your Node.js backend endpoint
      const response = await axios.post('http://localhost:4000/send-email', formData);
      console.log(response.data); // Log the response from the server
      alert('Email sent successfully');
      // Optionally, you can reset the form here
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
      alert('Error sending email');
    }


  

 


    
  };


  return (
    <div className='contact'>
    <div className="support">
      <div className="left-box">
        <h1>Have a Question in Mind?</h1>
        <h3>Reach us with Ease</h3>
        <p>Bruveg values its Customers, connect with us and we will reach out to you in your celebrations Over 1 Lacs+ customers trust bruveg.com to make their event planning a breeze.</p>
        <div className="button-container">
        <button className="btn whatsapp" onClick={handleWhatsappClick}>
              <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </button>
    <button className="btn call-us" onClick={handleCallClick}>
      <FontAwesomeIcon icon={faPhone} /> Call Us
    </button>
  </div>
  <div className='headofc'>
  <h4>Head Office</h4>
    <p>EC 91 Saltlake Sector 1 Kolkata 700064</p>
   </div>

   <div className='customersupport'>
  <h4>Customer Support</h4>
  <p>
    <span style={{ fontWeight: 'bold',  fontSize: '16px' }}>Calling Hours -</span> <span style={{ color: '#25D366'}}>10:30 AM to 7:30 PM </span>(Monday to Saturday)
  </p>
   </div>
   <div className='headofc'>
  <h4>Branches accross India</h4>
    <p>Ahmedabad | Bangalore | Chandigarh | Chennai | Delhi | Hyderabad | Jaipur | Kolkata | Lucknow | Mumbai | Pune | Surat</p>
   </div>

   <div className='mail'>
 
  <p>
    <span style={{ fontWeight: 'bold',  fontSize: '16px' }}>Mail Us :</span> care@bruveg.com
  </p>
   </div>
   
      </div>
      <div className="right-box">
          <h2>Submit Your Request</h2>
          <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
            
              <input  type="text" placeholder='Your Name' id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              
              <input type="email" placeholder='Your Email ID' id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
            
              <input type="tel" 
             placeholder='Your Contact Number' id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
          
              <textarea id="message" 
             placeholder='Enter Your Message Here' name="message" value={formData.message} onChange={handleInputChange} required></textarea>
            </div>
            <button className='query' type="submit">SEND YOUR QUERY</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SupportForm;
