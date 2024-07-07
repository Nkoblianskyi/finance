import { Slider } from "./_slider"

export const Leader: React.FC = () => {
    const slides = [
        { 
            title: '1111', 
            backgroundImage: '/land2.jpg',
            text: 'sdfsdf',
            span: 'ohsubjh.',
        },
        { 
            title: '2222', 
            backgroundImage: '/land3.jpg',
            text: 'adgsrfvcgc',
            span: 'ytjhdfxgv.',
        },
        { 
            title: '3333', 
            backgroundImage: '/land4.jpg',
            text: 'dfsdfdsf',
            span: '23534225.',
        }
    ];

    return <Slider slides={slides}/>;

}