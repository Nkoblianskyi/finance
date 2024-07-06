import React, { useState } from 'react';


interface Frameworks {
    html: string[];
    javascript: string[];
    react: string[];
}

const frameworks: Frameworks = {
    html: ['Bootstrap', 'Foundation', 'Tailwind CSS', 'Bulma'],
    javascript: ['Angular', 'Vue.js', 'Ember.js', 'Svelte'],
    react: ['Next.js', 'Gatsby', 'Create React App', 'React Native']
};

export const Slider = () => {
    const [selectedFramework, setSelectedFramework] = useState<keyof typeof frameworks>('html'); // Встановлення типу для useState

    const handleClick = (framework: keyof typeof frameworks) => {
    setSelectedFramework(framework);
};

    return (
        <div className="slaider">
            <div className="slaider-button">
                {Object.keys(frameworks).map((key) => (
                <button key={key} onClick={() => handleClick(key as keyof typeof frameworks)}>
                    {key.toUpperCase()}
                </button>
                ))}
            </div>
            <div className="slaider-section">
                {frameworks[selectedFramework].map((framework, index: number) => (
                <div key={index} className="slaider-item">
                    {framework}
                </div>
                ))}
            </div>
        </div>
    );
};