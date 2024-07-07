import { FeaturesItem } from "./item"
import React from 'react';

const items = [
    {
        backgroundImg: '/features1.jpg',
        title: 'Reaching your full cloud potential',
        description: 'Accounting Automation Transforming Business Solutions',
    },
    {
        backgroundImg: '/features2.jpg',
        title: 'Accounting Automation Transforming Business Solutions',
        description: 'Accounting Automation Transforming Business Solutions',
    },
    {
        backgroundImg: '/f3.jpg',
        title: 'Estavillo and Company CPAs to Asia Top 30',
        description: 'Accounting Automation Transforming Business Solutions',
    },
    {
        backgroundImg: '/f4.jpg',
        title: 'Local Government focusing on nation’s greener and healthier lifestyle',
        description: 'Accounting Automation Transforming Business Solutions',
    },
    {
        backgroundImg: '/f5.jpg',
        title: 'Focusing on teamwork for exponential business growth',
        description: 'Accounting Automation Transforming Business Solutions',
    },
    {
        backgroundImg: '/f6.jpg',
        title: 'The future of cybersecurity',
        description: 'Accounting Automation Transforming Business Solutions',
    }
]

export const Features: React.FC = () => {

    return (
        <div className="features">
            <div className="features-title">
                <h1 className='features-text'>Featured Topics</h1>
            </div>
            <div className="features-wrapp">
                {items.map((item, index) => ( 
                <FeaturesItem
                    key={index}
                    backgroundImg={item.backgroundImg}
                    title={item.title}
                    description={item.description}
                />
                ))}
            </div>
        </div>
    )
}