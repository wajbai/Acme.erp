import React, { useState, useEffect } from 'react';
import Salesians from '../assets/img/client/Salesians_logo.jpg';
import charity from '../assets/img/client/charity.jpg';
import annai from '../assets/img/client/annai.jpg';
import congregation from '../assets/img/client/congregation-of sister.jpg';
import Montfort from '../assets/img/client/Montfort.jpg';
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
      <style>{`
        .review-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 500px;
          display: flex;
          align-items: center;
        }
        
        .review-text {
          transition: all 0.4s ease;
          transform: translateY(0);
          opacity: 1;
        }
        
        .review-text.transitioning {
          transform: translateY(20px);
          opacity: 0;
        }
        
        .circle-indicator {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 3px solid transparent;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
          
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
          z-index: 2;
          margin-top: -10px;
        }

        .circle-indicator img {
          width: 70%;
          height: 70%;
          object-fit: contain;
          border-radius: 50%;
        }
        
        .circle-indicator::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .circle-indicator:hover::before {
          opacity: 1;
        }
        
        .circle-indicator.active {
          transform: scale(1.15);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          border-color: #007bff;
        }

        .circle-indicator:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        
        .nav-arrow {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: white;
          border: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: #6c757d;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          top: 50%;
          transform: translateY(-50%);
        }

        .nav-arrow:hover {
          background: #004868;
          color: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0,123,255,0.3);
        }

        .line-between-arrows {
          position: absolute;
          top: 50%;
          left: 10px;
          right: 10px;
          height: 3px;
          background: #004868;
          z-index: 1;
          transform: translateY(-50%);
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reviewer-info {
          transition: all 0.4s ease;
        }

        .reviewer-info.transitioning {
          transform: translateY(15px);
          opacity: 0;
        }
      `}</style>

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
              <div className="mb-5" style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p className={`review-text lead text-muted mx-auto ${isTransitioning ? 'transitioning' : ''}`} style={{ maxWidth: '800px', fontSize: '1.25rem', lineHeight: '1.6', fontWeight: '400' ,marginTop: '-60px'}}>
                  {reviews[currentIndex].review}
                </p>
              </div>

              <div className="d-flex justify-content-center align-items-center mb-4 flex-wrap" style={{ gap: '15px', maxWidth: '600px', margin: '0 auto',marginTop: '-50px' }}> 
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
                      <span style={{ fontSize: '2rem', marginTop: '-5px' }}>{review.icon}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className={`reviewer-info ${isTransitioning ? 'transitioning' : ''}`}>
                <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '1.3rem' , marginTop: '60px' }}>
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
