import Image from 'next/image';
import React, { useState } from 'react';

interface FeaturesProps {
    backgroundImg: string;
    title: string;
    description: string;
}

export const FeaturesItem: React.FC<FeaturesProps> = ({ backgroundImg, title, description }) => {

    return (
        <div className="featuresitem">
            <div className='featuresitem-wrapp'>
                <Image
                    src={backgroundImg}
                    alt={title}
                    width={480}
                    height={675}
                    objectFit="cover"
                    className='featuresitem-img'
                />
                <h1 className="featuresitem-title">{title}</h1>
                <div className='featuresitem-description'>
                    <p className="featuresitem-text">{description}</p>
                </div>
            </div>
        </div>
    );
};
