import React from "react";
import CarouselSlide from '../components/carousel_slide/CarouselSlide';
import nigeria from '../pictures/nigeria.jpg';
import sonic_heroes from '../pictures/sonic_heroes.jpg';
import sonic_x from '../pictures/sonic_x.jpg';
import date_academy from '../pictures/date_academy.jpg';
import ib_logo from '../pictures/ib_logo.jpg';
import tucker_high_school from '../pictures/tucker_high_school.jpg';
import mike_football from '../pictures/mike_football.jpg';
import ga_tech_logo from '../pictures/ga_tech_logo.jpg';
import peeps from '../pictures/peeps.jpg';
import mike_alpha from '../pictures/mike_alpha.jpg';
import stepshow from '../pictures/stepshow.jpg';
import grad from '../pictures/grad.jpg';

const image_set_1 = [nigeria, sonic_heroes, sonic_x, date_academy];
const image_set_2 = [ib_logo, tucker_high_school, mike_football, ga_tech_logo];
const image_set_3 = [peeps, mike_alpha, stepshow, grad];

const Hobbies = () => {
    return (
        <div className="App-content-stuff d-flex flex-column">
            <p data-aos="fade-left" className='display-3-large sonic-blue-text'>Music Notation</p>
            <div data-aos="fade-left" className='topic-line sonic-red'></div>
            <p className='subhead-1-large text-dark'>I first tried my knack at music notation way back
            in 2015. For context, I was in marching band in middle school, and I wanted to make some 
            sheet music for my band to play. I was a huge fan of Ace Attorney, so I tried to notate one of the 
            songs from Ace Attorney Investigations 2 &#40;which unfortunately is still unlocalized so officially
            it is known as Gyakuten Kenji 2&#41;. I made this sheet music on Noteflight, and safe to say it is clear
            that I lacked a LOT of experience back then.</p>
            <div className="align-items-center d-flex justify-content-center subhead-1-large mb-3">
                <a href='https://www.noteflight.com/scores/view/8d83a57f00d7017dba5d3824a27c20580ffd31f9' target='_blank' className="pill-button no-decoration text-dark"> Click Here to listen to such an atrocity!</a>
            </div>
            <p className='subhead-1-large text-dark'>From there, I started using Musescore to attempt to notate sheet music but 
            to no coheret avail. Thus, I took a break from music notation for a while, as come high school, my interests 
            transfered from music to sports. Then in late 2019, I got the urge to go back into Musescore just from sheet music that I've
            seen people create, and never looked back. For the past 4 years &#40;though on and off&#41; I've been notating sheet music from
            songs in a concert band arrangement. As a matter of fact, on May 2024, I created a gig out of it! Check it out! </p>
            <div className="sonic-card mb-4">
                <CarouselSlide imageURLs={image_set_2} />
            </div>
        </div>
    );
};
 
export default Hobbies;