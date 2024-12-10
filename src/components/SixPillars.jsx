import { React, useState, useRef, useEffect } from 'react';
import './SixPillars.css';
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

const cards = [
    {
        title: "Nutrition",
        imagePath: "/carousel/carousel-0.jpeg",
        description: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
        iconPath: "/icons/Vector.png",
        tag: "121/80 mmHg"
    },
    {
        title: "Physical activity",
        imagePath: "/carousel/carousel-1.jpeg",
        description: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
        iconPath: "/icons/Vector (1).png",
        tag: "32 minutes"
    },
    {
        title: "Restorative sleep",
        imagePath: "/carousel/carousel-2.jpeg",
        description: "Consistent, quality sleep is essential for cognitive function and physical health.",
        iconPath: "/icons/Vector (2).png",
        tag: "8 hours"
    },
    {
        title: "Stress management",
        imagePath: "/carousel/carousel-3.jpeg",
        description: "Effective stress management techniques are crucial for mental well-being and overall health.",
        iconPath: "/icons/Vector (3).png",
        tag: "60 bpm"
    },
    {
        title: "Social connection",
        imagePath: "/carousel/carousel-4.jpeg",
        description: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
        iconPath: "/icons/Vector (1).png",
        tag: "Feeling better"
    },
    {
        title: "Substance abuse",
        imagePath: "/carousel/carousel-5.jpeg",
        description: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
        iconPath: "/icons/Vector (4).png",
        tag: "62 days"
    }
];

export default function SixPillars() {


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateView = () => {
            setIsMobile(window.innerWidth <= 1000); 
        };
        window.addEventListener('resize', updateView);
        updateView(); 
        return () => window.removeEventListener('resize', updateView);
    }, []);



    const cardsContainerRef = useRef(null);

    const scrollLeft = () => {
        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollBy({ left: -510, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollBy({ left: 510, behavior: 'smooth' });
        }
    };

    return (
        <div className="sixpillar-container">
            <div className="header">
                <p className="subtitle">HOW IT WORKS</p>
                <div className="title">
                    <h2>Lifestyle as medicine:</h2>
                    <span>The six pillars</span>
                </div>
            </div>

            {!isMobile && (
                <div className="navb">
                    {cards.map((card, index) => (
                        <button
                            key={index}
                            className={`nav-item ${index === 0 ? 'active' : ''}`}
                        >
                            {card.title}
                        </button>
                    ))}
                </div>
            )}

            <div className="cards-container" ref={cardsContainerRef}>
                <div className="cards">
                    {cards.map((card, index) => (
                        <div className="card" key={index}>
                            <div
                                className="card-image"
                                style={{
                                    backgroundImage: `url(${card.imagePath})`
                                }}
                            >
                                <div className="card-metric">
                                    <img
                                        src={card.iconPath}
                                        alt={`${card.title} icon`}
                                        className="metric-icon"
                                    />
                                    {card.tag}
                                </div>
                            </div>
                            <div className="card-content">
                                <h2 className="card-title">{card.title}</h2>
                                <p className="card-text">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {!isMobile && (
                <div className="navigation-arrows">
                    <div className="arrow" id="leftArrow" onClick={scrollLeft}>
                        <IoArrowBackSharp size={20} color="#8d8d8d" />
                    </div>
                    <div className="arrow" id="rightArrow" onClick={scrollRight}>
                        <IoArrowForward size={20} color="#8d8d8d" />
                    </div>
                </div>
            )}


        </div>

    );
}
