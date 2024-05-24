import { useState } from "react";
import './CarouselSlide.css';

export default function CarouselSlide({ imageURLs }) {
    const [imageIndex, setImageIndex] = useState(0); // sets component to first image

    function showNextImage() {
        setImageIndex((index) => {
            if (index === imageURLs.length - 1) return 0
            return index + 1
        });
    }

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return imageURLs.length - 1
            return index - 1
        });
    }

    return (
        <div className="d-flex position-relative">
            <img src={imageURLs[imageIndex]} className="object-fit-cover w-100 h-100 d-block"/>
            <button className="carousel-slider-button d-block position-absolute text-light" style={{ left: 0 }} onClick={showPrevImage}>
                <i className="button-styles bi-arrow-left-circle-fill" ></i>
            </button>
            <button className="carousel-slider-button d-block position-absolute text-light" style={{ right: 0 }} onClick={showNextImage}>
                <i className="button-styles bi-arrow-right-circle-fill"></i>
            </button>
        </div>

    );
}