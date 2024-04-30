import React from 'react';
import bdaydec from '../../image/bdaydec.png';
import haldi from '../../image/haldi.png';
import babyshower from '../../image/babyshower.png';
import anniversery from '../../image/anniversery.png';
import kidsdeco from '../../image/kidsdeco.png';
import weddingdeco from '../../image/weddingdeco.png';
import './section3.css'; 

const Section3 = () => {
  return (
    <div className='balloondecoration'>
      <h2>#1 Balloon Decoration Company In Bhubaneswar</h2>

      <div className='image-row'>
        <div className='image-large'>
          <div className='image-wrapper'>
            <a href='#'>
              <h3 className='image-heading'>Birthday Decoration</h3>
              <img src={bdaydec} alt='Balloon Decoration 1' />
            </a>
          </div>
        </div>
        <div className='image-small'>
          <div className='image-wrapper'>
            <a href='#'>
              <h3 className='image-heading'>Haldi Decoration</h3>
              <img src={haldi} alt='Balloon Decoration 2' />
            </a>
          </div>
        </div>
        <div className='image-small'>
          <div className='image-wrapper'>
            <a href='#'>
              <h3 className='image-heading'>Baby Shower Decoration</h3>
              <img src={babyshower} alt='Balloon Decoration 3' />
            </a>
          </div>
        </div>
      </div>

      <div className='image-row'>
        <div className='image-small'>
          <div className='image-wrapper'>
            <a href='#'>
              <h3 className='image-heading'>Anniversary Decoration</h3>
              <img src={anniversery} alt='Balloon Decoration 2' />
            </a>
          </div>
        </div>
        <div className='image-small'>
          <div className='image-wrapper'>
            <a href='#'>
              <h3 className='image-heading'>Kids Decoration</h3>
              <img src={kidsdeco} alt='Balloon Decoration 3' />
            </a>
          </div>
        </div>
        <div className='image-large'>
          <div className='image-wrapper'>
            <a href='#'>
              <h3 className='image-heading'>Wedding Decoration</h3>
              <img src={weddingdeco} alt='Balloon Decoration 1' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
