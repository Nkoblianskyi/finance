import Image from 'next/image'
import React, { useEffect, useState } from 'react';

interface Slide {
    title: string;
    text: string;
    span: string;
    backgroundImage: string;
}

interface SliderProps {
    slides: Slide[];
}

export const Slider: React.FC<SliderProps> = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleButtonClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const getIndicatorClass = (index: number) => (index === currentIndex ? 'active' : '');

    return (
        <div className="slider" 
        style={{ backgroundImage: `url(${slides[currentIndex].backgroundImage})` }}>
            <div className="slider-item">
                <div className='slider-item-wrapp'>
                <h1 className='slider-title'>{slides[currentIndex].title}</h1>
                <p className='slider-text'>{slides[currentIndex].text}</p>
                <span className='slider-span'>{slides[currentIndex].span}</span>
                </div>
            </div>
            <div className='slider-control'>
                <button className='slider-btn' onClick={handleButtonClick}>
                    Our Leaderships
                    <Image
                        className='slider-btn-svg'
                        src="/shape.svg"
                        alt="image shape"
                        width={22}
                        height={16}
                    />
                    {[...Array(slides.length)].map((_,index) => (
                        <div
                            key={index}
                            className={`slider-indicator ${getIndicatorClass(index)}`}
                        />
                    ))}
                </button>
            </div>
        </div>
    )
}