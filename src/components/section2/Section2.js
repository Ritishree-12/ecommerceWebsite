import React from 'react';
import birthday from '../../image/birthday.png';
import kids from '../../image/kids.png';
import dinner from '../../image/dinner.png';
import festival from '../../image/festival.png';
import wedding from '../../image/wedding-decoration.png';
import balloons from '../../image/balloons.png';
import './section2.css'; // Import your CSS file

const Section2 = () => {
  return (
    <div className="section-container">
      <div className='service'>
        <div className='image-container'>
          <img src={birthday} alt='Birthday Celebration' />
          <a href='/subpages/birthdayceleb'>Birthday Celebration</a>
        </div>
        <div className='image-container'>
          <img src={kids} alt='Kids Party' />
          <a href='#'>Kids Party</a>
        </div>
        <div className='image-container'>
          <img src={dinner} alt='Dinner Events' />
          <a href='#'>Dinner Events</a>
        </div>
        <div className='image-container'>
          <img src={festival} alt='Festival Decorations' />
          <a href='#'>Festival Decorations</a>
        </div>
        <div className='image-container'>
          <img src={wedding} alt='Wedding Setup' />
          <a href='#'>Wedding Setup</a>
        </div>
        <div className='image-container'>
          <img src={balloons} alt='Balloons Decor' />
          <a href='#'>Balloons Decor</a>
        </div>
      </div>
    </div>
  );
}

export default Section2;
