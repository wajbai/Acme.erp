import React, { useState, useEffect } from 'react';
import Salesians from '../assets/img/client/Salesians_logo.jpg';
import charity from '../assets/img/client/charity.jpg';
import annai from '../assets/img/client/annai.jpg';
import congregation from '../assets/img/client/congregation-of sister.jpg';
import Montfort from '../assets/img/client/Montfort.jpg';
import '../css/Review.css';
const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const reviews = [
        {
            id: 1,
            name: " Fr. Edwin Vasanth, Economer,",
            title: "",
            position: "Salesians of Don Bosco, Chennai Province",
            review: "The Best ERP, that helped us to bring our accounts in braches under control",
            icon: Salesians,
            color: "#004868"
        },
        {
            id: 2,
            name: " Sr. Bridgit Joseph,Sisters of Charity Hyderabad",
            title: "",
            position: "Provincial Treasurer",
            review: "ACME ERP is one of the best accounting software, very easy and simple to use and get the desirable reports",
            icon: charity,
            color: "#004868"
        },
        {
            id: 3,
            name: "Sr.Theresa ,SAT Mumbai,",
            title: "",
            position: "Provincial Teasurer",
            review: "I appreciate all of your help, enthusiasm, and attention to detail with your duties. This ERP is better off with you. We feel that the matters and details are sufficient under your direction",
            icon: annai,
            color: "#004868"
        },
        {
            id: 4,
            name: "Sr.T.Agnes SAT Trichy,",
            title: "",
            position: "Provincial Teasurer",
            review: "Acme.erp software helps all Institutions and organizations to make efficient use of their system",
            icon: congregation,
            color: "#004868"
        },
        {
            id: 5,
            name: "Bro. Michael Mathew,",
            title: "",
            position: "Asst. General Bursar, Montfort Brothers of St. Gabriel",
            review: "Acme.erp is the Accounting Software that any Not-Profit Organization can use efficiently to manage their Accounts",
            icon: Montfort,
            color: "#004868"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            handleSlideChange((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    const handleSlideChange = (newIndexOrFunction) => {
        setIsTransitioning(true);
        setTimeout(() => {
            if (typeof newIndexOrFunction === 'function') {
                setCurrentIndex(newIndexOrFunction);
            } else {
                setCurrentIndex(newIndexOrFunction);
            }
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 200);
    };

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
        handleSlideChange(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
        handleSlideChange(newIndex);
    };

    const goToSlide = (index) => {
        if (index !== currentIndex) {
            handleSlideChange(index);
        }
    };

    return (
        <>


            <div className="review-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="text-primary fw-semibold mb-2 fade-in-up" style={{ fontSize: '1rem', letterSpacing: '0.5px' }}>
                            Client Review
                        </p>
                        <h2 className="display-5 fw-bold text-dark mb-5 fade-in-up">
                            Adored by customers across the globe
                        </h2>
                    </div>

                    <div className="position-relative" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div className="line-between-arrows"></div>

                        <button className="nav-arrow position-absolute start-0" style={{ left: '-80px' }} onClick={goToPrevious}>
                            ←
                        </button>
                        <button className="nav-arrow position-absolute end-0" style={{ right: '-80px' }} onClick={goToNext}>
                            →
                        </button>

                        <div className="text-center px-4">
                            <div className="review-text-wrapper">
                                <p className={`review-text lead mx-auto ${isTransitioning ? 'transitioning' : ''}`}>
                                    {reviews[currentIndex].review}
                                </p>
                            </div>
                            <div className="review-indicator-container">
                                {reviews.map((review, index) => (
                                    <div
                                        key={review.id}
                                        className={`circle-indicator ${index === currentIndex ? 'active' : ''}`}
                                        onClick={() => goToSlide(index)}
                                        style={{
                                            borderColor: index === currentIndex ? review.color : 'transparent',
                                        }}
                                    >
                                        {typeof review.icon === 'string' && review.icon.startsWith('data') ? (
                                            <img src={review.icon} alt={review.name} />
                                        ) : typeof review.icon === 'string' && review.icon.endsWith('.jpg') ? (
                                            <img src={review.icon} alt={review.name} />
                                        ) : typeof review.icon === 'object' ? (
                                            <img src={review.icon} alt={review.name} />
                                        ) : (
                                            <span>{review.icon}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className={`reviewer-info ${isTransitioning ? 'transitioning' : ''}`}>
                                <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '1.3rem', marginTop: '60px' }}>
                                    {reviews[currentIndex].name}, {reviews[currentIndex].title}
                                </h5>
                                <p className="text-muted mb-0">{reviews[currentIndex].position}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;
