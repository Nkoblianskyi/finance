import Image from 'next/image'

interface Advantages {
    title: string[];
    description: string[];
}

const advantages: Advantages = {
    title: ['Integrity', 'Professionalism', 'Ethics'],
    description: ['Practicing honesty and showing a consistent and uncompromising adherence to strong moral and ethical principles and values.', 
                'Professional values and ethics, beliefs and principles, ethical success and influence towards success.',
                'Good moral compass and code of conduct for business effectiveness and growth.']
}

export const Details = () => {

    return (
        <div className="details">
            <div className="details-left">
                <ul className="details-list">
                    {advantages.title.map((title, index) => (
                        <li key={index} className="details-item">
                            <h1 className="details-title">{title}</h1>
                            <p className="details-text">{advantages.description[index]}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="details-right">
                <div className="details-right-wrapp">
                    <h1 className="details-right-title">
                        Delivering lasting results making difference
                    </h1>
                    <p className="details-right-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar elementum integer enim neque. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.
                    </p>
                    <p className="details-left-text">
                        Vivamus arcu felis bibendum ut tristique et. Diam in arcu cursus euismod quis. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Orci porta non pulvinar neque laoreet suspendisse interdum. Pharetra convallis posuere morbi leo. Faucibus ornare suspendisse sed nisi lacus sed.
                    </p>
                </div>
                <button className="details-button">Get to know us more
                    <Image src="shape.svg" alt="shape" width={20} height={16} className="details-img"/>
                </button>
            </div>
        </div>
    )
}