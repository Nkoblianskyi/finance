import Image from 'next/image';
import React, { useState } from 'react';

interface FeaturesProps {
    backgroundImg: string;
    title: string;
    description: string;
}

export const FeaturesItem: React.FC<FeaturesProps> = ({ backgroundImg, title, description }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className="featuresitem"
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)} >
            <div className="featuresitem-wrapp">
                <Image
                    src={backgroundImg}
                    alt={title}
                    width={480}
                    height={675}
                    objectFit="cover"
                    className='featuresitem-img'
                />
            </div>

            {!hover && (<h1 className="featuresitem-title">{title}</h1>)}
            {hover && (
                <div className='featuresitem-description'>
                    <h1 className="featuresitem-description-title">{title}</h1>
                    <p className="featuresitem-text">{description}</p>
                </div>
            )}
        </div>
    );
};
