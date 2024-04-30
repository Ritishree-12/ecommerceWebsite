import React from 'react';
import './section4.css'; 
import birthday from '../../image/birthday.png';
import kids from '../../image/kids.png';
import dinner from '../../image/dinner.png';
import festival from '../../image/festival.png';
import wedding from '../../image/wedding-decoration.png';
import balloons from '../../image/balloons.png';
import babygirl from '../../image/babygirl.png';
import kids1 from '../../image/kids1.png';
import dinner1 from '../../image/dinner1.png';
import festival1 from '../../image/festival1.png';
import weddingdeco1 from '../../image/weddingdeco1.png';
import balloons1 from '../../image/balloons1.png';

const Section4 = () => {
    const imagesData = [
        { src: birthday, text: 'Birthday Decoration' },
        { src: kids, text: 'Kids Party' },
        { src: dinner, text: 'Dinner Events' },
        { src: festival, text: 'Festival Decorations' },
        { src: wedding, text: 'Wedding Setup' },
        { src: balloons, text: 'Balloons Decor' },
        { src: babygirl, text: 'Baby Girl' },
        { src: kids1, text: 'Kids Party' },
        { src: dinner1, text: 'Dinner Events' },
        { src: festival1, text: 'Festival Decorations' },
        { src: weddingdeco1, text: 'Wedding Setup' },
        { src: balloons1, text: 'Balloons Decor' }
    ];

    return (
        <>
            <h2 style={{  fontFamily:'Poppins', color: '#333',fontWeight:'bold' }}>All Categories</h2>
            <div className="gallery">
                {imagesData.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={image.src} alt={`Image ${index + 1}`} />
                        <p>{image.text}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Section4;
