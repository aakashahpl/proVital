import React from 'react';
import './sixPillars.css';

const cards = [
    {
        title: "Nutrition",
        imagePath: "/carousel/carousel-0.jpeg",
        description: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
        iconPath: "/icons/heart-icon.svg", // Example icon path
        tag: "121/80 mmHg"
    },
    {
        title: "Physical activity",
        imagePath: "/carousel/carousel-1.jpeg",
        description: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
        iconPath: "/icons/clock-icon.svg", // Example icon path
        tag: "32 minutes"
    },
    {
        title: "Restorative sleep",
        imagePath: "/carousel/carousel-2.jpeg",
        description: "Consistent, quality sleep is essential for cognitive function and physical health.",
        iconPath: "/icons/sleep-icon.svg", // Example icon path
        tag: "8 hours"
    },
    {
        title: "Stress management",
        imagePath: "/carousel/carousel-3.jpeg",
        description: "Effective stress management techniques are crucial for mental well-being and overall health.",
        iconPath: "/icons/heart-rate-icon.svg", // Example icon path
        tag: "60 bpm"
    },
    {
        title: "Social connection",
        imagePath: "/carousel/carousel-4.jpeg",
        description: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
        iconPath: "/icons/social-icon.svg", // Example icon path
        tag: "Feeling better"
    },
    {
        title: "Substance abuse",
        imagePath: "/carousel/carousel-5.jpeg",
        description: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
        iconPath: "/icons/days-icon.svg", // Example icon path
        tag: "62 days"
    }
];


export default function SixPillars() {
    return (
        <div className="container">
            <div className="header">
                <p className="subtitle">HOW IT WORKS</p>
                <div className="title">
                    <h1>Lifestyle as medicine:</h1>
                    <span>The six pillars</span>
                </div>
            </div>

            <div className="navb">
                <button className="nav-item active">Nutrition</button>
                <button className="nav-item">Physical activity</button>
                <button className="nav-item">Restorative sleep</button>
                <button className="nav-item">Stress management</button>
                <button className="nav-item">Social connection</button>
                <button className="nav-item">Substance abuse</button>
            </div>

            <div className="cards">
                <div className="card">
                    <div
                        className="card-image"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80')"
                        }}
                    >
                        <div className="card-metric">
                            <span className="metric-icon blue"></span>
                            121/80 mmHg
                        </div>
                    </div>
                    <div className="card-content">
                        <h2 className="card-title">Nutrition</h2>
                        <p className="card-text">Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.</p>
                    </div>
                </div>

                <div className="card">
                    <div
                        className="card-image"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80')"
                        }}
                    >
                        <div className="card-metric">
                            <span className="metric-icon pink"></span>
                            32 minutes
                        </div>
                    </div>
                    <div className="card-content">
                        <h2 className="card-title">Physical activity</h2>
                        <p className="card-text">Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.</p>
                    </div>
                </div>

                <div className="card">
                    <div
                        className="card-image"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1520206183501-b80df61043c2?auto=format&fit=crop&q=80')"
                        }}
                    >
                        <div className="card-metric">
                            <span className="metric-icon green"></span>
                            8 hours
                        </div>
                    </div>
                    <div className="card-content">
                        <h2 className="card-title">Restorative sleep</h2>
                        <p className="card-text">Consistent, quality sleep is essential for optimal cognitive function and physical health.</p>
                    </div>
                </div>
            </div>

            <div className="navigation-arrows">
                <div className="arrow">←</div>
                <div className="arrow">→</div>
            </div>
        </div>
    );
}
