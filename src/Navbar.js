import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import logoC from './image/logoC.png'
import cart from './image/cart.png'
import support from './image/support.png'
import location from './image/location.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedUp, setSignedUp] = useState(false); // New state for tracking sign up status

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset email and password fields
    setEmail('');
    setPassword('');
    // Close modal
    setShowModal(false);
  };

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log('Signed up with Email:', email);
    console.log('Password:', password);
    // Reset email and password fields
    setEmail('');
    setPassword('');
    // Update sign up status
    setSignedUp(true);
    // Close modal
    setShowModal(false);
  };


  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logoC} alt="Logo" />
          </a>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search Decorations" />
          <button className="search-button" type="submit">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <div className="support-container">
                <div className="icon">
                  <img src={support} style={{width:'26px',height:'26px',border:'1px'}} />
                </div>
                <div className="support-content">
                  <Link to="/support" style={{fontWeight:'500',fontSize:'14px',fontFamily:'Poppins'}}>Support</Link>
                  <div className="email" style={{color:'#FFA439',fontSize:'14px'}}>hello@bruveg.com</div>
                </div>
              </div>
            </li>
            <li>
              <div className="support-container">
                <div className="icon">
                  <img src={location} style={{width:'26px',height:'26px'}} />
                </div>
                <div className="support-content">
                  <Link to="#" style={{fontWeight:'500',fontSize:'14px',fontFamily:'Poppins'}}>Choose City</Link>
                  <div className="email" style={{color:'#FFA439', fontSize:'14px'}}>Bhubaneswar</div>
                </div>
              </div>
            </li>
            <li>
              <div className="support-container">
                <div className="icon">
                  <img src={cart} style={{width:'28px',height:'28px'}} />
                </div>
                <div className="support-content">
                  <Link to="#" style={{fontWeight:'500',fontSize:'14px',fontFamily:'Poppins'}}>My Cart</Link>
                  <div className="email" style={{color:'#FFA439',fontSize:'14px'}}>0 Items</div>
                </div>
              </div>
            </li>
            <li>
            <button className="login-button" onClick={toggleModal}>{signedUp ? 'Login' : 'Login | SignUp'}</button>
            </li>
            <li className="menu-toggle" onClick={toggleMenu}>
              {showMenu ? (
                <FontAwesomeIcon icon={faTimes} style={{ color: 'black' }} />
              ) : (
                <>&#9776;</>
              )}{' '}
              
            </li>

          </ul>
          
          {/* <div className="navbar-right">
            <div className="support-container">
              <div className="icon">
                <FontAwesomeIcon icon={faLocationArrow} className="city-icon" style={{ color: '#ff8c00' }} />
                <div className="loc" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  City
                </div>
              </div>
            </div>
          </div> */}
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>
      </div>
      {/* Responsive sidebar */}
      <div className={`sidebar ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>
        
        <ul>
          <li>
            <Link to="/support" style={{textDecoration:'none'}}>
              <img src={support} alt="Support" style={{ width: '26px', height: '26px' }} />
              Support
            </Link>
          </li>
          <li>
            <Link to="#" style={{textDecoration:'none'}}>
              <img src={location} alt="Location" style={{ width: '26px', height: '26px' }} />
              Choose City
            </Link>
          </li>
          <li>
            <Link to="#" style={{textDecoration:'none'}}>
              <img src={cart} alt="Cart" style={{ width: '28px', height: '28px' }} />
              My Cart
            </Link>
          </li>
          <li>
            <button>Login | SignUp</button>
          </li>
        </ul>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>{signedUp ? 'Login' : 'Login or Sign Up'}</h2>
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            {signedUp ? (
              <button onClick={handleLogin}>Login</button>
            ) : (
              <>
                <button onClick={handleSignUp}>Sign Up</button>
                <p>Already have an account? <span onClick={() => setSignedUp(true)}>Login here</span></p>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
