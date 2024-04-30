import React from 'react';
// import Banner from './components/Banner.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer.js'
import Home from './Home';
import SupportForm from './SupportForm.js';
import Birthdayceleb from './subpages/Birthdayceleb.js'

function App() {
  return (
    //     <>
    // <Banner/>
    //     </>
    <Router >
      <Navbar />
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<SupportForm />} />
          <Route path="/subpages/birthdayceleb" element={<Birthdayceleb />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
