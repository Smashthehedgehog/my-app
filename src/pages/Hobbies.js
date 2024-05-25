import React from "react";
import CarouselSlide from '../components/carousel_slide/CarouselSlide';
import musescore_ego from '../pictures/musescore_ego.jpg';
import musescore_goodbye from '../pictures/musescore_goodbye.jpg';
import musescore_liveyourlife from '../pictures/musescore_liveyourlife.jpg';

const musescore_image_set = [musescore_ego, musescore_goodbye, musescore_liveyourlife];

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
            songs in a concert band arrangement. Here are some examples of what I've done. </p>
            <div className="sonic-card mb-4">
                <CarouselSlide imageURLs={musescore_image_set} />
            </div>
        </div>
    );
};
 
export default Hobbies;