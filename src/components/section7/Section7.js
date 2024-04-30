import React from 'react';
import './section7.css';
import hall1 from '../../image/hall1.png';
import classy1 from '../../image/classy1.png';
import backdrop1 from '../../image/backdrop1.png';
import redblack1 from '../../image/redblack1.png';
import Star from '../../image/Star.png';
import arrow from '../../image/arrow.png';

const Section7 = () => {
    // Example data for cards
    const cardData = [
        {
            id: 1,
            image: hall1,
            title: 'Simple Hall Decoration',
            price: '2000',
            booking: 'Book Now',
            rating: 4.5,
            views: 211,
            star: Star
        },
        {
            id: 2,
            image: classy1,
            title: 'Classy Birthday Decoration',
            price: '2350',
            booking: 'Book Now',
            rating: 4.2,
            views: 333,
            star: Star
        },
        {
            id: 3,
            image: backdrop1,
            title: 'Birthday Backdrop Decoration',
            price: '3050',
            booking: 'Book Now',
            rating: 4.2,
            views: 222,
            star: Star
        },
        {
            id: 4,
            image: redblack1,
            title: 'Yellow Black Theme',
            price: '5150',
            booking: 'Book Now',
            rating: 4.2,
            views: 786,
            star: Star
        },
    ];

    return (
        <>
            <div className="header-container">
                <h2 className="header-title">Anniversary Balloon Decoration in Bhubaneswar</h2>
                <img src={arrow} width={'20px'}/>
            </div>

            <div className="gallery-container">
                {cardData.map((item) => (
                    <div className="gallery-card" key={item.id}>
                        <img src={item.image} alt={item.title} className="card-image" />
                        <div className="card-details">
                            <h3 className="card-title">{item.title}</h3>
                            <div className="card-info">
                                <p className="card-price">Rs.{item.price}</p>
                            </div>
                            <div className="card-info">
                                <p className="card-price2" style={{color:'#F38501'}}>20% OFF</p>
                            </div>
                            <div className="card-stats">
                            <img src={item.star} alt={item.title} style={{ width: 20, height: 20, }} /> 
                                <p className="card-rating">
                                   {item.rating}
                                </p>
                                <p className="card-views">{item.views} reviews</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Section7;
