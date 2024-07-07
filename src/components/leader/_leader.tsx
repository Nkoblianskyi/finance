import { Slider } from "./_slider"

export const Leader: React.FC = () => {
    const slides = [
        { 
            title: 'We’ve Been Providing Quality Solutions For Over 20 Years.”', 
            backgroundImage: '/land2.jpg',
            text: 'Mr. Mario Dela Cruz',
            span: 'Managing Partner.',
        },
        { 
            title: 'If you think you can do a thing or think you cant do a thing, youre right.', 
            backgroundImage: '/land3.jpg',
            text: 'Ford',
            span: 'Boss.',
        },
        { 
            title: 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.', 
            backgroundImage: '/land4.jpg',
            text: 'Ford',
            span: 'Boss',
        }
    ];

    return <Slider slides={slides}/>;

}